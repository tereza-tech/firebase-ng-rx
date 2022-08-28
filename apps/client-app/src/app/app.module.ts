import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';
import { NxModule } from '@nrwl/nx';
import { RouterModule, InitialNavigation } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AuthModule } from '@ngrx-transactions-app/auth';

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'shellApp' }),
    BrowserAnimationsModule,
    NxModule.forRoot(),
    AppRoutingModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [LayoutComponent],
})
export class AppModule {}
