import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-work-test',
  templateUrl: './form-work-test.component.html',
  styleUrls: ['./form-work-test.component.scss']
})
export class FormWorkTestComponent  {

  constructor(private fb: FormBuilder) { }
  
  //*******single form control */
          // name = new FormControl('');
          // updateName() {
          //   this.name.setValue('Nancy');
          // }
  //*******single form control */




  //*************Form Group form control -->
          // profileForm = new FormGroup({
          //   firstName: new FormControl(''),
          //   lastName: new FormControl(''),
          // });

          // onSubmit() {
          //   // TODO: Use EventEmitter with form value
          //   console.warn(this.profileForm.value);
          // }
  //*************Form Group form control -->




  //*************Creating nested form groups -->
          // profileForm = new FormGroup({
          //   firstName: new FormControl(''),
          //   lastName: new FormControl(''),
          //   address: new FormGroup({
          //     street: new FormControl(''),
          //     city: new FormControl(''),
          //     state: new FormControl(''),
          //     zip: new FormControl('')
          //   })
          // });

          // // updateProfile() {
          // //   this.profileForm.setValue({
          // //     firstName: 'Nancy',
          // //     lastName:'ali',
          // //     address: {
          // //       street: '123 Drew Street',
          // //       city: 'test',
          // //       state: 'test',
          // //       zip: 'test'
          // //     }
          // //   });
          // // }
  //*************Creating nested form groups -->




  //*************Using the FormBuilder service to generate controls -->


  //*************Using the FormBuilder service to generate controls -->
 profileForm = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            address:this.fb.group({
              street: [''],
              city: ['', Validators.required],
              state: [''],
              zip: ['']
            }),
            aliases: this.fb.array([
              this.fb.control('')
            ])
          });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  onSubmit() {
  // TODO: Use EventEmitter with form value
  console.warn(this.profileForm.value);
}



}







