import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng2-tel-input',
  templateUrl: './ng2-tel-input.component.html',
  styleUrls: ['./ng2-tel-input.component.scss']
})
export class Ng2TelInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onCountryChange(event: any) {
    console.log(event.dialCode);
    console.log(event.name);
    console.log(event.iso2);
  }

}
