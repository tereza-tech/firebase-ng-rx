import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from '@ngrx-transactions-app/auth'
//import { AuthModule } from '@auth/auth.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: (): Promise<any> =>
      import('@ngrx-transactions-app/auth').then(({ AuthModule }): AuthModule => AuthModule),
  },
  {
    path: 'training',
    canActivate: [AuthGuard],
    loadChildren: (): Promise<any> =>
      import('@ngrx/dashboard.module').then(
        ({ DashboardModule }): DashboardModule => DashboardModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppShellRoutingModule { }
