import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from '@ngrx-transactions-app/auth'
//import { AuthModule } from '@auth/auth.module';
import { NotFoundPageComponent } from './../not-found-page/not-found-page.component';
import { TrainingModule } from '@training/training.module';
import { LoggedInGuard } from '../guards';

const routes: Routes = [
  {
    path: '',
    loadChildren: (): Promise<any> =>
      import('@ngrx-transactions-app/auth').then(({ AuthModule }): AuthModule => AuthModule),
  },
  {
    path: 'training',
    canActivate: [LoggedInGuard],
    loadChildren: (): Promise<any> =>
      import('@training/training.module').then(
        ({ TrainingModule }): TrainingModule => TrainingModule,
      ),
  },
  { path: '**', component: NotFoundPageComponent }, ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppShellRoutingModule { }
