import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import firebase from 'firebase';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html'
})
export class LandingComponent implements OnInit {
 db = firebase.firestore();
  constructor(private snack: MatSnackBar) { }
MessageForm: FormGroup;

  ngOnInit() {
    this.MessageForm = new FormGroup({
      fullName: new FormControl('', Validators.required),
      message: new FormControl('')
    });
  }
  onSubmit() {
    this.db.collection('users').add({
  //the message object passeed to firestore
  fullName: this.MessageForm.get('fullName').value,
  message: this.MessageForm.get('message').value
    }).catch((error) => {
  //the function return a promise which is then catched  to address the errors which might happen
  this.snack.open('An error occurred', 'ok');
  console.log('error adding document: ', error);
});
this.snack.open('message successfully sent', 'ok', {duration: 3000});
console.log('message sent');
this.MessageForm.reset();
  }
}
