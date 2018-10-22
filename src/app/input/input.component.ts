import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() placeholder: string = "Type here...";
  @Input() title: string = "E-mail";

  placeholderValue;
  titleValue;
  constructor() { }

  ngOnInit() {
    this.placeholderValue = this.placeholder;
    this.titleValue = this.title;
  }

}
