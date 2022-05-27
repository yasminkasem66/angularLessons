import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.scss']
})
export class ZippyComponent {

  @Input('title') title!:string;
  Expanded:boolean=false;
  constructor() { }

  toggle(){
    this.Expanded=!this.Expanded;
  }


}
