import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { ProductRoutingRoutes } from './product-routing.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ProductRoutingRoutes
  ],
  declarations: [ProductComponent]
})
export class ProductModule { }
