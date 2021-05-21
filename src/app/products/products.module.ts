import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AddProductComponent } from './pages/add-product/add-product.component';
import { ProductsRoutingModule } from './products-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AddProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class ProductsModule { }
