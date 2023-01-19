import { fadeInAnimation } from './../@core/animations/fade';
import { trigger, transition, style, animate, useAnimation } from '@angular/animations';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { bounceOutLeftAnimation } from '../@core/animations/fade';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
  animations: [
    trigger(
      'todoAnimation', [
      transition(':enter', useAnimation(fadeInAnimation, {
        params: {
          duration: '1s'
        }
      })),
      transition(':leave', [
        style({ background: 'red' }),
        animate(500),
        useAnimation(bounceOutLeftAnimation)
      ])
    ]
    )
  ]
})





export class ToDosComponent implements OnInit {
  modalRef?: BsModalRef;
  CousesForm = new FormGroup({
    topics: new FormArray([
      new FormControl('course1'),
      new FormControl('course2'),
      new FormControl('course3'),
      new FormControl('course4'),
    ]),
  });

  constructor(fb: FormBuilder, private modalService: BsModalService) {

  }

  ngOnInit(): void { }

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

  animationStart(event: any) {
    console.log({ event });

  }
  animationDone(event: any) {
    console.log({ event });

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}








// CousesFormm = new FormGroup({
//   name: new FormControl("", [Validators.required]),
//   contacts: new FormGroup({
//     phone: new FormControl(),
//     email: new FormControl()
//   }),
//   topics: new FormArray([]),
// });

    // this.CousesFormBuilder = fb.group({
    //   name: ['', [Validators.required]],
    //   contacts: fb.group({
    //     phone: [],
    //     email: [],
    //   }),
    //   topics: fb.array([]),
    // });