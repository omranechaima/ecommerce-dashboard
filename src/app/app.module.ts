import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzTableModule } from 'ng-zorro-antd/table'; // Table module
import { NzModalModule } from 'ng-zorro-antd/modal'; // Modal module
import { NzFormModule } from 'ng-zorro-antd/form'; // Form module
import { NzButtonModule } from 'ng-zorro-antd/button'; // Button module
import { NzInputModule } from 'ng-zorro-antd/input'; // For input fields
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzLayoutModule } from 'ng-zorro-antd/layout'; // Import this module
import { NzIconModule } from 'ng-zorro-antd/icon'; // Import this module
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSwitchModule } from 'ng-zorro-antd/switch';


import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { AddToCartFormComponent} from './components/add-to-cart-form/add-to-cart-form.component';
import { AddProductFormComponent } from './components/add-product-form/add-product-form.component'; // Badge module for cart count


registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CartComponent,
    AddToCartFormComponent,
    AddProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule ,
    NzSelectModule,
    NzTableModule,    
    NzModalModule,    // For modal dialogs
    NzFormModule,     // For forms and validation
    NzButtonModule,   // For buttons like "Add to Cart"
    NzInputModule,    // For input fields in forms
    NzBadgeModule ,
    NzLayoutModule ,
    NzIconModule  ,
    NzSwitchModule 
    
  ],
  providers: [{ provide: NZ_I18N, useValue: fr_FR }],
  bootstrap: [AppComponent]
})
export class AppModule { }
