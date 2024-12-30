import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { CartService } from '../../../services/cart.service'; 
import { NzModalService } from 'ng-zorro-antd/modal';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddToCartFormComponent} from '../add-to-cart-form/add-to-cart-form.component'; // Badge module for cart count
import { AddProductFormComponent } from '../add-product-form/add-product-form.component';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: any[] = []; // Original product data
  filteredProducts: any[] = []; // Products after filtering/sorting
  searchQuery: string = ''; // Search query
  sortOrder: string = 'priceAsc'; // Default sorting order

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private modal: NzModalService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
        this.filteredProducts = [...this.products]; // Initialize filtered products
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  filterProducts(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredProducts = this.products.filter((product) =>
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    );
    this.sortProducts(); // Apply sorting after filtering
  }

  sortProducts(): void {
    this.filteredProducts.sort((a, b) => {
      if (this.sortOrder === 'priceAsc') {
        return a.price - b.price; // Low to High
      } else if (this.sortOrder === 'priceDesc') {
        return b.price - a.price; // High to Low
      }
      return 0;
    });
  }

  openAddToCartModal(product: any): void {
    const modal = this.modal.create({
      nzTitle: `Add ${product.name} to Cart`,
      nzContent: AddToCartFormComponent,
      nzComponentParams: { product },
      nzOnOk: (formInstance: AddToCartFormComponent) => {
        const quantity = formInstance.form.value.quantity;
        this.cartService.addToCart(product, quantity );
      }
    });
  }

  openAddProductModal(): void {
    const modal = this.modal.create({
      nzTitle: 'Add Product',
      nzContent: AddProductFormComponent,
      nzOnOk: (instance: AddProductFormComponent) => {
        if (instance.form.valid) {
          const newProduct = instance.form.value;
          this.addProduct(newProduct);
          modal.destroy();
        }
      }
    });
  }

  addProduct(product: any): void {
    this.productService.addProduct(product).subscribe(
      (response) => {
        this.products.push(response); // Update the product list with the newly added product
        this.filteredProducts = [...this.products];
        console.log('Product added:', response);
      },
      (error) => {
        console.error('Error adding product:', error);
      }
    );
  }

}
