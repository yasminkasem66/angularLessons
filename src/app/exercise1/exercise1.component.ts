import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.scss'],
})
export class Exercise1Component {
  // template dreven form
  contactMethod=[
    {id:1, name:"Email"},
    {id:2, name:"phone"}
  ]
  log(x:any){
console.log({x});

  }


  submitt(f:any){
    console.log(f.value);
    console.log({f});
  }
}
