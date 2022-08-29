import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { } from '@ng-test/ui/components'

@NgModule({
  declarations: [RemoteEntryComponent, NxWelcomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
        children: [{
          path: '',
          loadChildren: () => import('@ng-test/ui/components').then((m) => m.TransactionComponent)
        }]
      }
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule { }
