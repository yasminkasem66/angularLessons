import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputformat]'
})
export class InputformatDirective {
  @Input('appInputformat') state!: string ;
 
  constructor(private el:ElementRef) { }
  @HostListener('blur') onBuler(){
    console.log("ccc",this.state);
    if( this.state=='uppercase'){
      let value:string=this.el.nativeElement.value;
      this.el.nativeElement.value=value.toUpperCase();
    }else{
      let value:string=this.el.nativeElement.value;
      this.el.nativeElement.value=value.toLowerCase();
    }
    
  }

}
