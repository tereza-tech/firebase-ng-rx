import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from '../environments/environment';
import { NxModule } from '@nrwl/nx';
import { RouterModule, InitialNavigation } from '@angular/router';
import { authRoutes, AuthModule } from '@demo-app/auth';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'shellApp' }),
    NxModule.forRoot(),
    RouterModule.forRoot([{ path: 'auth', children: authRoutes }], {
      initialNavigation: 'enabled',
    }),
    AuthModule,
    RouterModule, // added
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [LayoutComponent],
})
export class AppModule {}
