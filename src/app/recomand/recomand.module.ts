import { NgModule } from '@angular/core';
import { RecomandComponent } from './recomand.component';
import { RecomandroutingRoutes } from './recomandrouting.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RecomandroutingRoutes
  ],
  declarations: [RecomandComponent]
})
export class RecomandModule { }
