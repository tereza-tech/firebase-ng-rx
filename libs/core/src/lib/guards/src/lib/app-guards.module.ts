import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as AuthGuard from './auth.guard';
import * as UserPermitGuard from './userPermitted.guard'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthGuard
  ],
  exports: [ AuthGuard, UserPermitGuard]
})
export class AppGuardsModule { }
