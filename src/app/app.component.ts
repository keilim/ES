import { Component, ViewChild} from '@angular/core';
import {AuthComponent} from './auth/auth.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'es';
  login: boolean = true;

  constructor(private router: Router) {}

  onSignOutClicked= function() {
    this.router.navigateByUrl('/');
  }
}
