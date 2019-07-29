import { Component, OnInit } from '@angular/core';
import { Emoji, Dialog } from '../../decorators';

export interface Channels {
  id: string,
  icon: string,
  title: string,
  link: string
}

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {

  @Emoji() result = 'Hello';

  @Dialog("您确认要执行吗？")
  handleClick(evt) {

  }
  channels: Channels[] = [
    {
      id: "1",
      icon: '.../../../../../../assets/icon/app.png',
      title: "app",
      link: ''
    }, {
      id: "2",
      icon: '.../../../../../../assets/icon/calendar(2).png',
      title: "calendar",
      link: ''
    }, {
      id: "3",
      icon: '.../../../../../../assets/icon/group.png',
      title: "group",
      link: ''
    }, {
      id: "4",
      icon: '.../../../../../../assets/icon/online-conference.png',
      title: "conference",
      link: ''
    }, {
      id: "5",
      icon: '.../../../../../../assets/icon/paper-plane.png',
      title: "app",
      link: ''
    },{
      id: "6",
      icon: '.../../../../../../assets/icon/search.png',
      title: "search",
      link: ''
    },{
      id: "7",
      icon: '.../../../../../../assets/icon/shield.png',
      title: "shield",
      link: ''
    },{
      id: "1",
      icon: '.../../../../../../assets/icon/talk.png',
      title: "talk",
      link: ''
    }];

  constructor() { }

  ngOnInit() {
  }

}
