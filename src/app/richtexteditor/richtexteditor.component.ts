import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-richtexteditor',
  templateUrl: './richtexteditor.component.html',
  styleUrls: ['./richtexteditor.component.scss']
})
export class RichtexteditorComponent implements OnInit {

  title!:string;
  constructor() { }

  ngOnInit(): void {
  }

}
