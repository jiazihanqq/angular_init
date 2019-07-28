import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { TopMenu, ImageSlider, ImageSliderComponent } from './shared/component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  @ViewChild("imageSlider", {static:true}) imgSlider : ImageSliderComponent;
  constructor(){

  }

  ngAfterViewInit(): void {
    
  }
  topMenus: TopMenu[] = [
    {
      title: "热门",
      link: ''
    }, {
      title: "男装",
      link: ''
    }, {
      title: "手机",
      link: ''
    }
  ];

  handleTabSelected(topMenu: TopMenu) {
    console.log(topMenu);
  }
  imageSliders: ImageSlider[] = [
    {
      imgUrl: "./../assets/image/以尔森.PNG",
      link: '',
      caption: ""
    }, {
      imgUrl: "./../assets/image/水晶之恋.PNG",
      link: '',
      caption: ""
    }, {
      imgUrl: "./../assets/image/米兰印象.PNG",
      link: '',
      caption: ""
    }, {
      imgUrl: "./../assets/image/胡桃夹子.PNG",
      link: '',
      caption: ""
    }
  ];


}
