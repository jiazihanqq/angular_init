import { Component, OnInit, Input, ViewChild, ElementRef, ViewChildren, QueryList, AfterViewInit, Renderer2, OnDestroy } from '@angular/core';

export interface ImageSlider {
  imgUrl: string,
  link: string,
  caption: string
}
@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() sliders: ImageSlider[] = [];
  @Input() sliderHeight = '160px';
  @Input() intervalBySeconds = 2;
  @ViewChild('imageSliders', { static: true }) imageSlider: ElementRef;
  @ViewChildren("imgs") imgs: QueryList<ElementRef>;
  selectedIndex = 0;
  intervalID;
  constructor(private rd2: Renderer2) {

  }

  ngOnInit() {
    console.log("ngOninit", this.imageSlider);

  }
  ngAfterViewInit(): void {
    // this.imgs.forEach(item => (item.nativeElement.style.height = '100px'))
    // this.imgs.forEach(item => (this.rd2.setStyle(item.nativeElement, "height", "200px")))
    let i = 0;
    this.intervalID = setInterval(() => {
      this.rd2.setProperty(this.imageSlider.nativeElement, "scrollLeft", (this.getIndex(++this.selectedIndex % this.sliders.length) * this.imageSlider.nativeElement.scrollWidth) / this.sliders.length)
    }, this.intervalBySeconds * 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalID);
  }
  getIndex(idx: number): number {
    return idx >= 0 ? idx % this.sliders.length : this.sliders.length - (Math.abs(idx) % this.sliders.length);
  }

  handleScroll(evt: { target: { scrollLeft: number; scrollWidth: number; }; }) {
    const ratio =
      evt.target.scrollLeft / (evt.target.scrollWidth / this.sliders.length);
    this.selectedIndex = Math.round(ratio);
  }
}
