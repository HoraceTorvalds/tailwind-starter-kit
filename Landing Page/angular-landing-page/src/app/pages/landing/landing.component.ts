import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import firebase from 'firebase';
import {MatSnackBar} from '@angular/material/snack-bar';
import KeenSlider from 'keen-slider';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit, AfterViewInit {
  @ViewChild('sliderRef', {static: false}) sliderRef: ElementRef<HTMLElement>;
  interval: any = 0;
  pause = false;
  slider: KeenSlider = null;
 db = firebase.firestore();
  MessageForm: FormGroup;
  constructor(private snack: MatSnackBar,
              private viewPortScroller: ViewportScroller) { }

  ngOnInit() {
    this.MessageForm = new FormGroup({
      fullName: new FormControl(''),
      email: new FormControl('', Validators.email),
      message: new FormControl('')
    });
    // this.nextSlide();
    // this.previousSlide();
  }
// resetInterval() {
//     clearInterval(this.interval);
// }
// setInterval() {
//     this.resetInterval();
//     this.interval = setInterval(() => {
//       if (!this.pause) {
//         this.slider.next();
//       }
//     }, 1000);
// }
// setPause(active) {
//     this.pause = active;
//     this.setInterval();
// }

  onSubmit() {
    if (this.MessageForm.valid) {
      this.db.collection('users').add({
        fullName: this.MessageForm.get('fullName').value,
        email: this.MessageForm.get('email').value,
        message: this.MessageForm.get('message').value
      }).catch((error) => {
        this.snack.open('An error occurred', 'ok');
        console.log('error adding document: ', error);
      });
      this.snack.open('message sent', 'ok', {duration: 3000});
      console.log('message sent: ', this.MessageForm);
      this.MessageForm.reset();
    } else {
      this.snack.open('you email is invalid', 'ok', {duration: 3000});
    }
  }


  navigate(ElementId: string) {
this.viewPortScroller.scrollToAnchor(ElementId);
  }
  // nextSlide() {
  //   const activeSlide = document.querySelector('.slide.translate-x-0');
  //   activeSlide.classList.remove('translate-x-0');
  //   activeSlide.classList.add('-translate-x-full');
  //
  //   const nextSlide = activeSlide.nextElementSibling;
  //   nextSlide.classList.remove('translate-x-full');
  //   nextSlide.classList.add('translate-x-0');
  // }
  // previousSlide() {
  //   const activeSlide = document.querySelector('.slide.translate-x-0');
  //   activeSlide.classList.remove('translate-x-0');
  //   activeSlide.classList.add('translate-x-full');
  //
  //   const previousSlide = activeSlide.previousElementSibling;
  //   previousSlide.classList.remove('-translate-x-full');
  //   previousSlide.classList.add('translate-x-0');
  // }
   ngAfterViewInit() {
  //   this.slider = new KeenSlider(this.sliderRef.nativeElement, {
  //     loop: true,
  //     duration: 1000,
  //     dragStart: () => {
  //       this.setPause(false);
  //     },
  //   });
  //   this.setInterval();
  // }
  // ngOnDestroy() {
  //   if (this.slider) { this.slider.destroy(); }

      }
}
