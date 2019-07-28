import { NgModule } from '@angular/core';
import { CategoryComponent } from './category.component';
import { CategoryRoutingRoutes } from './category-routing.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CategoryRoutingRoutes
  ],
  declarations: [CategoryComponent]
})
export class CategoryModule { }
