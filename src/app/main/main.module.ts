import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableComponent} from '../table/table.component';
import {TableRowComponent} from '../table-row/table-row.component';

@NgModule({
  imports: [
    CommonModule,
    TableComponent,
    TableRowComponent
  ],
  declarations: []
})
export class MainModule { }
