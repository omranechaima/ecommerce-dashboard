import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service'; // Import CartService to handle cart data
import { CartItem } from '../../models/cart-item.model'; // Import the CartItem interface

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = []; // Array to hold the cart items

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Subscribe to get the cart items from the CartService
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems = items; // Update the cartItems array when the data changes
    });
  }

  // Method to update the item quantity in the cart
  updateItem(item: CartItem): void {
    this.cartService.updateCartItem(item); // Call the service method to update the item
  }

  // Method to remove an item from the cart
  removeItem(item: CartItem): void {
    this.cartService.removeCartItem(item); // Call the service method to remove the item
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems = items; // Refresh the cart items after removal
    });
  }

  // Calculate the total price of all items in the cart
  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  // Checkout method
  checkout(): void {
    // Implement checkout functionality here (e.g., navigate to a checkout page or show a confirmation)
    alert('Proceeding to checkout');
  }
}
