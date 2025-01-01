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
import { NzTableModule } from 'ng-zorro-antd/table'; 
import { NzModalModule } from 'ng-zorro-antd/modal'; 
import { NzFormModule } from 'ng-zorro-antd/form'; 
import { NzButtonModule } from 'ng-zorro-antd/button'; 
import { NzInputModule } from 'ng-zorro-antd/input'; 
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzLayoutModule } from 'ng-zorro-antd/layout'; 
import { NzIconModule } from 'ng-zorro-antd/icon'; 
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';


import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { AddToCartFormComponent} from './components/add-to-cart-form/add-to-cart-form.component';
import { AddProductFormComponent } from './components/add-product-form/add-product-form.component';


registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CartComponent,
    AddToCartFormComponent,
    AddProductFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule ,

    NzSkeletonModule,
    NzSelectModule,
    NzTableModule,    
    NzModalModule,    
    NzFormModule,     
    NzButtonModule,   
    NzInputModule,    
    NzBadgeModule ,
    NzLayoutModule ,
    NzIconModule  ,
    NzSwitchModule 
    
  ],
  providers: [{ provide: NZ_I18N, useValue: fr_FR }],
  bootstrap: [AppComponent]
})
export class AppModule { }
