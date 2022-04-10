import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.scss'],
})
export class Exercise1Component implements OnInit {
  public likes: number = 0;
  constructor() {}

  inclike() {
    this.likes++;
  }
  ngOnInit(): void {}
}
