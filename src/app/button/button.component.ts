import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() title: string = "button";
  @Input() backgroundColor: string ="#FFF";
  @Input() textColor: string = "#000";

  titleValue;
  constructor() { }

  ngOnInit() {
    this.titleValue = this.title;
  }

}
