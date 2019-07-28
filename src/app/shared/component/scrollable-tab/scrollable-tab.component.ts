import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

// interface 可以定义变量、函数、字典对象
export interface TopMenu {
  title: String,
  // readonly只读类型，？可选类型
  link?: string
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})
export class ScrollableTabComponent implements OnInit {
  title = 'pinduoduo';
  selectedIndex = -1;
  @Input() backgroundColor = '#fff';
  @Input() menus: TopMenu[] = [];
  @Input() titleActiveColor = 'yellow';
  @Input() titleColor = 'blue';
  @Input() indicatorColor: 'brown';
  @Output() tabSelected = new EventEmitter();

  // 构造函数第一个调用 
  constructor() {
    console.log("构建调用");
  }
  // 组建初始化完成
  ngOnInit() {
    console.log("组建初始化");
  }

  handleSelection(index: number) {
    this.selectedIndex = index;
    this.tabSelected.emit(this.menus[this.selectedIndex]);
  }

}
