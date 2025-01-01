import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cartItemCount: number = 0;
  totalPrice: number = 0;
  hoveredItem: string | null = null;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cartItemCount$.subscribe((count) => {
      this.cartItemCount = count; 
    });

    this.cartService.totalPrice$.subscribe((price) => {
      this.totalPrice = price;
    });
  }
}
