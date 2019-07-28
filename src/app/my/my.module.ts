import { NgModule } from '@angular/core';
import { MyComponent } from './my.component';
import { MyRouteRoutes } from './my-route.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    MyRouteRoutes
  ],
  declarations: [MyComponent]
})
export class MyModule { }
