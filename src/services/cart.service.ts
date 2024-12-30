import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../app/models/cart-item.model';  // Import the CartItem model

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any[] = []
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]); // Holds the current cart items
  cartItemCount$ = new BehaviorSubject<number>(0); // Holds the current cart item count

  constructor() {}

  // Return the cart items as an observable
  getCartItems() {
    return this.cartItemsSubject.asObservable();
  }

  // Update the cart items (e.g., add/update an item)
  updateCartItem(item: CartItem) {
    const currentItems = this.cartItemsSubject.getValue();
    const index = currentItems.findIndex(i => i.id === item.id);
    if (index !== -1) {
      currentItems[index] = item; // Update the existing item
    } else {
      currentItems.push(item); // Add new item if it doesn't exist
    }
    this.cartItemsSubject.next(currentItems); // Emit the updated cart items
    this.updateCartItemCount(); // Update the cart item count whenever items change
  }

  // Remove a cart item
  removeCartItem(item: CartItem) {
    const currentItems = this.cartItemsSubject.getValue();
    const updatedItems = currentItems.filter(i => i.id !== item.id); // Remove item by id
    this.cartItemsSubject.next(updatedItems); // Emit the updated cart items
    this.cartItems=updatedItems
    this.updateCartItemCount(); // Update the cart item count whenever items change
  }

  // Calculate the total price of items in the cart
  getTotalPrice(): number {
    const items = this.cartItemsSubject.getValue();
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  // Private method to update the cart item count
  private updateCartItemCount() {
    const items = this.cartItemsSubject.getValue();
    const itemCount = items.reduce((total, item) => total + item.quantity, 0);
    this.cartItemCount$.next(itemCount); // Update the item count
  }

  addToCart(product: any , quantity: number): void {
    const existingProduct = this.cartItems.find(item => item.id === product.id);
    
    if (existingProduct) {
      existingProduct.quantity += 1; // Increment quantity if already in cart
    } else {
      this.cartItems.push({ ...product, quantity: quantity }); // Add new product to cart with quantity 1
    }
     const totalQuantity = this.cartItems.reduce((total, item) => total + item.quantity, 0);
     this.cartItemCount$.next(totalQuantity);
     this.cartItemsSubject.next(this.cartItems)
  }

}
