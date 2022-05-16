import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent implements OnInit {
  @Input('likesCount') likesCount:number=0;
  title!:string;
  @Input('isFavorite') isSelected:boolean=false;
  @Output() jasmin =new EventEmitter();
  constructor() { }

  // onClick(){
  // this.isSelected =!this.isSelected;
  //  if(this.isSelected) {
  //    this.likesCount++;
  //    return;
  //  }
  //  this.likesCount--;
  // }


  // onClick(){
  //  if(this.isSelected) {
  //   this.likesCount--;
  //   this.isSelected =!this.isSelected;
  //  }else{
  //   this.likesCount++;
  //   this.isSelected =!this.isSelected;
  //  }
  // }

  onClick(){
    this.likesCount += this.isSelected ? -1 :1;
    this.isSelected =!this.isSelected;
    this.jasmin.emit(this.isSelected);
  }

  ngOnInit(): void {
  }

}
