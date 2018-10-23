import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignUpComponent} from './signup/signup.component';
import {AuthComponent} from './auth/auth.component';
import {CardIssuePageComponent} from './card-issue-page/card-issue-page.component';
import {MainComponent} from './main/main.component';

const routes: Routes = [
  {path:'', redirectTo: '/login', pathMatch: 'full'},
  {path: 'signup', component: SignUpComponent},
  {path: 'login', component: AuthComponent},
  {path: 'issuedCardStatus', component: CardIssuePageComponent},
  {path: 'history', component: MainComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
