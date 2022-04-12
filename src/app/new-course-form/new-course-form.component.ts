import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.scss'],
})
export class NewCourseFOrmComponent implements OnInit {
  CousesForm = new FormGroup({
    topics: new FormArray([]),
  });
  constructor() {}

  ngOnInit(): void {}

  addTopic(topic: HTMLInputElement) {
    this.topics.push(
      new FormControl(topic.value)
    );

    topic.value = '';
  }

  get topics() {
    // get a refernce to the topic property
    // its return abstract control object  that doesnt have push method cuz it's only defined in a form array class so we need  explicitly to cast it it

    return this.CousesForm.get('topics') as FormArray;
  }

  removeTopic(topic: AbstractControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index)
  }

  getControls() {
    return this.topics.controls;
  }
}
