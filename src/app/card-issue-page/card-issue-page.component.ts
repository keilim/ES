import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card-issue-page',
  templateUrl: './card-issue-page.component.html',
  styleUrls: ['./card-issue-page.component.css']
})

export class CardIssuePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigateByUrl('/');
    },10000)
  }

  onNumberClick = function() {
    this.router.navigateByUrl('/');
  }
}
