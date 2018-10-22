import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {EsUiModule} from 'es-ui';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    EsUiModule
  ],
  declarations: [],
  exports: []
})
export class AuthModule { }
