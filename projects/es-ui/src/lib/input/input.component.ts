import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'esui-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() placeholder: string = "Type here...";
  @Input() title: string = "E-mail";
  @Input() type: string = "text";

  placeholderValue;
  titleValue;
  typeValue;
  constructor() { }

  ngOnInit() {
    this.placeholderValue = this.placeholder;
    this.titleValue = this.title;
    this.typeValue = this.type;
  }

}
