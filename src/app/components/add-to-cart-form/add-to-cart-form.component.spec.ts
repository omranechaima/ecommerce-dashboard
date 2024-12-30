import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCartFormComponentComponent } from './add-to-cart-form-component.component';

describe('AddToCartFormComponentComponent', () => {
  let component: AddToCartFormComponentComponent;
  let fixture: ComponentFixture<AddToCartFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToCartFormComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToCartFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
