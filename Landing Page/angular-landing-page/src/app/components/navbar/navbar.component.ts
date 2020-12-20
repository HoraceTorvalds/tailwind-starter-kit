import {Component, Input, NgZone} from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  constructor() {
  }
  showMenu = false;
  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }
    }
