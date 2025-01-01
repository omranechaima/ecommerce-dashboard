import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../app/models/cart-item.model';  

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any[] = []
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]); 
  cartItemCount$ = new BehaviorSubject<number>(0); 
  totalPrice$ = new BehaviorSubject<number>(0);
  
  constructor() {}

  getCartItems() {
    return this.cartItemsSubject.asObservable();
  }


  updateCartItem(item: CartItem) {
    const currentItems = this.cartItemsSubject.getValue();
    const index = currentItems.findIndex(i => i.id === item.id);
    if (index !== -1) {
      currentItems[index] = item; 
    } else {
      currentItems.push(item); 
    }
    this.cartItemsSubject.next(currentItems); 
    this.updateCartItemCount();
  }

 
  removeCartItem(item: CartItem) {
    const currentItems = this.cartItemsSubject.getValue();
    const updatedItems = currentItems.filter(i => i.id !== item.id); 
    this.cartItemsSubject.next(updatedItems); 
    this.cartItems=updatedItems
    this.updateCartItemCount();
  }

  getTotalPrice(): number {
    const items = this.cartItemsSubject.getValue();
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  }
  
  private updateTotalPrice() {
    const totalPrice = this.getTotalPrice();
    this.totalPrice$.next(totalPrice); 
  }

 
  private updateCartItemCount() {
    const items = this.cartItemsSubject.getValue();
    const itemCount = items.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = this.getTotalPrice();
    this.cartItemCount$.next(itemCount); 
    this.totalPrice$.next(totalPrice);
  }

  addToCart(product: any , quantity: number): void {
    const existingProduct = this.cartItems.find(item => item.id === product.id);
    
    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      this.cartItems.push({ ...product, quantity: quantity }); 
    }
     const totalQuantity = this.cartItems.reduce((total, item) => total + item.quantity, 0);
     this.cartItemCount$.next(totalQuantity);
     this.cartItemsSubject.next(this.cartItems);
     this.updateTotalPrice();
  }

}
