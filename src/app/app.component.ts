// app.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service'; // Import CartService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cartItemCount: number = 0;
  hoveredItem: string | null = null;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    // Subscribe to cartItemCount$ from the CartService to get real-time updates
    this.cartService.cartItemCount$.subscribe((count) => {
      this.cartItemCount = count; // Update the cartItemCount value
    });
  }
}
