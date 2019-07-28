import { NgModule } from '@angular/core';
import { HomeComponent } from './Home.component';
import { HomeRouteRoutes } from './HomeRoute.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    HomeRouteRoutes,
    SharedModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
