import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as AuthGuard from './auth.guard';
import * as UserPermitGuard from './userPermitted.guard'


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [ ]
})
export class AppGuardsModule { }
