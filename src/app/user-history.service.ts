import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {USER_HISTORY} from './mock-data';


@Injectable({
  providedIn: 'root'
})
export class UserHistoryService {

  private login = false;
  constructor() { }

  getCharacters(): Observable<any[]>{
    return of(USER_HISTORY.card_issued_history)
    .pipe(
      delay(100)
    );
  }

  getColumns(): string[] {
    return ["date", "card_ID", "location", "reason", "returned"]
  }

  getLoginStatus() {
    return this.login;
  }

  changeLoginStatus() {
    this.login = !this.login;
  }
}
