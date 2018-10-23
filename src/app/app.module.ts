import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EsUiModule } from 'es-ui';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { MainComponent } from './main/main.component';
import {AuthModule} from './auth/auth.module';
import {SignupModule} from './signup/signup.module';
import {SignUpComponent} from './signup/signup.component';
import {InputComponent} from './input/input.component';
import {ButtonComponent} from './button/button.component';
import { CardIssuePageComponent } from './card-issue-page/card-issue-page.component';
import { AppRoutingModule } from './app-routing.module';
import { TableComponent } from './table/table.component';
import { TableRowComponent } from './table-row/table-row.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    InputComponent,
    ButtonComponent,
    SignUpComponent,
    CardIssuePageComponent,
    MainComponent,
    TableComponent,
    TableRowComponent
  ],
  imports: [
    BrowserModule,
    EsUiModule,
    AuthModule,
    SignupModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
