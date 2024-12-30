import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product-form',
  template: `
    <form [formGroup]="form" style="display: flex; flex-direction: column; gap: 20px;">
      <nz-form-item>
        <nz-form-label [nzRequired]="true">Product Name</nz-form-label>
        <nz-form-control>
          <input nz-input formControlName="name" />
        </nz-form-control>
        <div *ngIf="form.get('name')?.invalid && form.get('name')?.touched" class="error-message">
          <div *ngIf="form.get('name')?.hasError('required')">Product Name is required.</div>
          <div *ngIf="form.get('name')?.hasError('minlength')">Product Name must be at least 3 characters long.</div>
        </div>
      </nz-form-item>

      <nz-form-item>
        <nz-form-label [nzRequired]="true" nzFor="price">Price</nz-form-label>
        <nz-form-control>
          <input
            nz-input
            type="number"
            formControlName="price"
            placeholder="Enter product price"
          />
          <!-- Custom Error Message -->
          <div *ngIf="form.get('price')?.invalid && form.get('price')?.touched" class="error-message">
            <div *ngIf="form.get('price')?.hasError('required')">Price is required.</div>
            <div *ngIf="form.get('price')?.hasError('min')">Price must be a positive number.</div>
            <div *ngIf="form.get('price')?.hasError('pattern')">Please enter a valid number.</div>
          </div>
        </nz-form-control>
      </nz-form-item>

      <nz-form-item>
        <nz-form-label nzFor="category">Category</nz-form-label>
        <nz-form-control>
          <nz-select formControlName="category" placeholder="Select category">
            <nz-option nzValue="electronics" nzLabel="Electronics"></nz-option>
            <nz-option nzValue="fashion" nzLabel="Fashion"></nz-option>
            <nz-option nzValue="books" nzLabel="Books"></nz-option>
          </nz-select>
        </nz-form-control>
      </nz-form-item>

      <nz-form-item>
        <nz-form-label nzFor="description">Description</nz-form-label>
        <nz-form-control>
          <textarea nz-input formControlName="description" placeholder="Enter product description"></textarea>
        </nz-form-control>
      </nz-form-item>

      <nz-form-item>
        <nz-form-label nzFor="availability">Availability</nz-form-label>
        <nz-form-control>
          <nz-switch formControlName="availability"></nz-switch>
        </nz-form-control>
      </nz-form-item>
    </form>
  `
})
export class AddProductFormComponent implements OnInit {
  @Input() product: any;
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [this.product?.name || '', Validators.required],
      price: [this.product?.price || '', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      category: [this.product?.category || null],
      description: [this.product?.description || ''],
      availability: [this.product?.availability || true]
    });
  }
}
