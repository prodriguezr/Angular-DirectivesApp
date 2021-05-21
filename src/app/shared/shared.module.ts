import { NgModule } from '@angular/core';

import { ErrorMsgDirective } from './directives/error-msg.directive';
import { MenuComponent } from './menu/menu.component';
import { CustomIfDirective } from './directives/custom-if.directive';

@NgModule({
  declarations: [
    MenuComponent,
    ErrorMsgDirective,
    CustomIfDirective
  ],
  imports: [
  ],
  exports: [
    ErrorMsgDirective,
    CustomIfDirective,
  ]
})
export class SharedModule { }
