import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent implements OnInit {
  likesCount:number=0;
  isSelected:boolean=false;
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
    this.isSelected =!this.isSelected;
  this.likesCount += this.isSelected ? 1 :-1;
  }

  ngOnInit(): void {
  }

}
