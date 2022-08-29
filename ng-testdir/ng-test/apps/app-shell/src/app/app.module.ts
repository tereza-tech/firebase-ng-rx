import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UserService, SharedDataUserModule } from '@ng-test/shared/data/user'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [  
        {
          path: '',
          pathMatch: 'full',
          loadChildren: () =>
            import('client-app/Module').then((m) => m.RemoteEntryModule),
        },
        { path: 'login', loadChildren: () => import('@ng-test/shared/data/user').then(m => m.SharedDataUserModule
          ) },
      ],
      
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
