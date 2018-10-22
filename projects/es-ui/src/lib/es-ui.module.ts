import { NgModule } from '@angular/core';
import { EsUiComponent } from './es-ui.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';

@NgModule({
  imports: [
  ],
  declarations: [EsUiComponent, ButtonComponent, InputComponent],
  exports: [EsUiComponent, ButtonComponent, InputComponent]
})
export class EsUiModule { }
