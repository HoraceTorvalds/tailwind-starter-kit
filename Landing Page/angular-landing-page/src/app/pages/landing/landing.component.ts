import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import firebase from "firebase";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html'
})
export class LandingComponent implements OnInit {
 db = firebase.firestore();
  constructor() { }
MessageForm: FormGroup;

  ngOnInit() {
    this.MessageForm = new FormGroup({
      fullName: new FormControl('', Validators.required),
      message: new FormControl('')
    });
  }
  onSubmit() {
this.db.collection('users').add({
  fullName: this.MessageForm.get('fullName').value,
  message: this.MessageForm.get('message').value
}).catch((error) => {
  console.log('error adding document: ', error);
});
this.MessageForm.reset();
  }
}
