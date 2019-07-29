import { Component, OnInit } from '@angular/core';
import { Emoji } from '../../decorators';

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {

  @Emoji() result = 'Hello';
  constructor() { }

  ngOnInit() {
  }

}
