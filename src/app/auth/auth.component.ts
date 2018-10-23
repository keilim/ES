import { Component, OnInit, Input, } from '@angular/core';
import {Router} from '@angular/router';
import {UserHistoryService} from '../user-history.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private router: Router,
    private userHistory: UserHistoryService) { }

  ngOnInit() {
  }

  btnClick = function() {
    this.router.navigateByUrl('/signup');
  }

  onLoginClicked = function() {
    this.userHistory.changeLoginStatus();
    this.router.navigateByUrl('/history');
  }

}
