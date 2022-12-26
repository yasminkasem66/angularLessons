import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  @Input('appHighLight') color!: string;
  // @Input('defaultColor') defaultColor!: string;
  @HostListener('mouseover') mouseover() {
    this.changeColor(this.color || 'black')
  }
  @HostListener('mouseleave') mouseleave() {
    this.changeColor('yellow')
  }

  constructor(private el: ElementRef, private render: Renderer2) { }


  changeColor(color: string) {
    this.render.setStyle(this.el.nativeElement, 'backgroundColor', color)
  }
}
