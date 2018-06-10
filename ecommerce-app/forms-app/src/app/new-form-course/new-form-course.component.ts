import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'new-form-course',
  templateUrl: './new-form-course.component.html',
  styleUrls: ['./new-form-course.component.css']
})
export class NewFormCourseComponent {
  form;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    })
  }
  // form = new FormGroup({
  //   topics: new FormArray([])
  // });

  // addTopic(topic: HTMLInputElement) {
  //   this.topics.push(new FormControl(topic.value));
  //   topic.value = '';
  // }

  // removeTopic(topic: FormControl) {
  //   let index = this.topics.controls.indexOf(topic);
  //   this.topics.removeAt(index);
  // }

  // get topics() {
  //   return this.form.get('topics') as FormArray;
  // }
}
