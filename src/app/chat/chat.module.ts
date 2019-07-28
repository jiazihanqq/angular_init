import { NgModule } from '@angular/core';
import { ChatComponent } from './chat.component';
import { ChatRoutingRoutes } from './chat-routing.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ChatRoutingRoutes
  ],
  declarations: [ChatComponent]
})
export class ChatModule { }
