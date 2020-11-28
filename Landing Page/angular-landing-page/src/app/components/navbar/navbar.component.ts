import {Component, NgZone} from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  constructor(private snack: MatSnackBar,
              private zone: NgZone) {
  }
  showMenu = false;
  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }
  openSnack() {
    const config = new MatSnackBarConfig();
    config.panelClass = ['background-black'];
    config.verticalPosition = 'bottom';
    config.horizontalPosition = 'center';
    this.zone.run(() => {
      this.snack.open('snack open', 'ok', config);
    });

  }
}
