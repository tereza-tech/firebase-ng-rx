import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ClientAppGuard } from '@ngrx-transactions-app/core-guards';

const routes: Routes = [
  /*{ path: '', pathMatch: 'full', redirectTo: 'vaki' },*/

  {
    path: '',
    canActivateChild: [ ClientAppGuard ],
    component: LayoutComponent,
          children: [
               {
                    path: 'work',
                    loadChildren: () => import('@ralbx/').then(m => m.AuthModule),
               },
               {
                    path: "dashboard",
                    loadChildren: () =>
                         import("@ngrx-transactions-app/dashboard").then((m) => m.DashboardModule),
               },
               {
                    path: "transactions",
                    loadChildren: () =>
                         import("@ralbx/pages/transactions").then((m) => m.TransactionsModule),
               },
               {
                    path: "templates",
                    loadChildren: () =>
                         import("@ralbx/pages/templates").then((m) => m.TemplatesModule),
               },
          ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
