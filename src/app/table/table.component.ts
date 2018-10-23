import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {UserHistoryService} from '../user-history.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  userHistory: Observable<any[]>;
  columns: string[];

  constructor(private uhService: UserHistoryService) { }

  ngOnInit() {
    this.columns = this.uhService.getColumns();
    this.userHistory = this.uhService.getCharacters();
  }

}
