import { Directive, OnInit, Input, HostBinding } from '@angular/core';

@Directive({
    selector: '[appGridItemTitle]',
})

export class GridItemTitleDirective {
    @HostBinding('style.font-size')  @Input() appGridItemTitle = '4rem';
    @HostBinding('style.grid-area') area = 'title'; 
    
    // constructor(private elf: ElementRef, private rd2: Renderer2) {
        
    // }
    // ngOnInit(): void {
    //   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //   //Add 'implements OnInit' to the class.
    //   this.rd2.setStyle(this.elf.nativeElement, 'grid-area', 'title');
    // }
} 