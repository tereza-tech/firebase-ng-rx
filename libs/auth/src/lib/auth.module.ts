import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AuthService } from './auth.service';

export const authRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule, AuthService],
  declarations: [LoginComponent, LoginFormComponent],
  exports: [ AuthService ]
})
export class AuthModule {}
