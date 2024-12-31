import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service'; 
import { CartItem } from '../../models/cart-item.model'; 

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = []; 

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems = items;
    });
  }

  updateItem(item: CartItem): void {
    this.cartService.updateCartItem(item); 
  }

  removeItem(item: CartItem): void {
    this.cartService.removeCartItem(item); 
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems = items; 
    });
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  checkout(): void {
    alert('Proceeding to checkout');
  }
}
