import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'esui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() title: string = "button";

  titleValue;
  constructor() { }

  ngOnInit() {
    this.titleValue = this.title;
  }

}
