import { Directive, ElementRef, Renderer2, Input, OnInit, HostListener } from '@angular/core';

@Directive({
    selector: '[appGridItemImage]',
})

export class GridItemImageDirective implements OnInit{
    @Input() appGridItemImage = '2rem';
    @Input() fitMode = 'cover';
    constructor(private elf: ElementRef, private rd2: Renderer2) {
    }
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.rd2.setStyle(this.elf.nativeElement, 'grid-area', 'image');
        this.rd2.setStyle(this.elf.nativeElement, 'width', this.appGridItemImage);
        this.rd2.setStyle(this.elf.nativeElement, 'height', this.appGridItemImage);
        this.rd2.setStyle(this.elf.nativeElement, 'object-fit', this.fitMode);
    }

    @HostListener("click",['$event.target'])
    handleClick(ev){
        console.dir(ev)
    }
}