import { Directive, HostBinding} from '@angular/core';

@Directive({
    selector: '[appGridItem]',
})

export class GridItemDirective {

    // 新式写法
    // 获取宿主的style属性，并绑定到display变量上
    @HostBinding('style.display') display = 'grid';
    @HostBinding('style.grid-template-areas') template =  "'image' 'title'";
    @HostBinding('style.place-items') placeItem = 'center';
    @HostBinding('style.width') width = '4rem';
    
    // 老式写法
    // constructor(private elf: ElementRef, private rd2: Renderer2) {
      
    // }
    // ngOnInit(): void {
    //     //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //     //Add 'implements OnInit' to the class.
    //     this.rd2.setStyle(this.elf.nativeElement, 'display', 'grid');
    //     this.rd2.setStyle(this.elf.nativeElement, 'grid-template-areas', "'image' 'title'");
    //     this.rd2.setStyle(this.elf.nativeElement, 'place-item', 'center');
    //     this.rd2.setStyle(this.elf.nativeElement, 'width', '4rem');
    // }
}