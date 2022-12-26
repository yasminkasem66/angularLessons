import { createHostBinding } from '@angular/compiler/src/core';
import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRandomCOlor]'
})
export class RandomCOlorDirective {

  @HostBinding('style.color') elementColor: string | undefined
  constructor() { }

  @HostListener('keyup') setColor() {

    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    this.elementColor = `rgb(${r},${g},${b})`

  }

}
