import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-to-cart-form',
  template: `
    <form [formGroup]="form" style="display: flex; flex-direction: column; gap: 20px;">
      <label>Enter Quantity:</label>
      <input nz-input type="number" formControlName="quantity" min="1" />
    </form>
  `
})
export class AddToCartFormComponent implements OnInit {
  @Input() product: any; 
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      quantity: [1, [Validators.required, Validators.min(1)]]
    });
  }
}
