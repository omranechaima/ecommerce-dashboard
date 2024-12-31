import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product-form',
  styleUrls: ['./add-product-form.component.scss'],
  template: `
    <form [formGroup]="form" style="display: flex; flex-direction: column; gap: 20px;">
      <nz-form-item>
        <nz-form-label [nzRequired]="true" class="add-product-form-label">Product Name</nz-form-label>
        <nz-form-control>
          <input nz-input formControlName="name" />
       
        <div *ngIf="form.get('name')?.invalid && form.get('name')?.touched" class="error-message">
          <div *ngIf="form.get('name')?.hasError('required')" style="color:red">Product Name is required.</div>
          <div *ngIf="form.get('name')?.hasError('minlength')">Product Name must be at least 3 characters long.</div>
        </div> 
        </nz-form-control>
      </nz-form-item>

      <nz-form-item>
        <nz-form-label [nzRequired]="true" nzFor="price" class="add-product-form-label">Price</nz-form-label>
        <nz-form-control>
          <input
            nz-input
            type="number"
            formControlName="price"
            placeholder="Enter product price"
          />
          <div *ngIf="form.get('price')?.invalid && form.get('price')?.touched" class="error-message">
            <div *ngIf="form.get('price')?.hasError('required')"style="color:red">Price is required.</div>
            <div *ngIf="form.get('price')?.hasError('min')">Price must be a positive number.</div>
          </div>
        </nz-form-control>
      </nz-form-item>

      <nz-form-item>
        <nz-form-label nzFor="category" class="add-product-form-label">Category</nz-form-label>
        <nz-form-control>
          <nz-select formControlName="category" placeholder="Select category">
            <nz-option nzValue="electronics" nzLabel="Electronics"></nz-option>
            <nz-option nzValue="fashion" nzLabel="Fashion"></nz-option>
            <nz-option nzValue="books" nzLabel="Books"></nz-option>
          </nz-select>
          <div *ngIf="form.get('category')?.invalid && form.get('category')?.touched" class="error-message">
            <div *ngIf="form.get('category')?.hasError('required')"style="color:red">Category is required.</div>
          </div>
        </nz-form-control>
      </nz-form-item>

      <nz-form-item>
        <nz-form-label nzFor="description" class="add-product-form-label">Description</nz-form-label>
        <nz-form-control>
          <textarea nz-input formControlName="description" placeholder="Enter product description"></textarea>
        </nz-form-control>
      </nz-form-item>

      <nz-form-item>
        <nz-form-label nzFor="availability" class="add-product-form-label">Availability</nz-form-label>
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
      category: [this.product?.category || null, Validators.required],
      description: [this.product?.description || ''],
      availability: [this.product?.availability || true]
    });
  }

  /**
   * Validate the form and return a boolean indicating its validity.
   */
  validateForm(): boolean {
    if (this.form.invalid) {
      this.form.markAllAsTouched(); // Highlight errors for all fields
      return false;
    }
    return true;
  }
}
