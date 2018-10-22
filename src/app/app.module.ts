import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EsUiModule } from 'es-ui';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import {AuthModule} from './auth/auth.module';
import {SignupModule} from './signup/signup.module';
import {SignUpComponent} from './signup/signup.component';
import {InputComponent} from './input/input.component';
import {ButtonComponent} from './button/button.component';
import { CardIssuePageComponent } from './card-issue-page/card-issue-page.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    InputComponent,
    ButtonComponent,
    SignUpComponent,
    CardIssuePageComponent
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
