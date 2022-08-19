import { LayoutComponent } from './layout/layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'vaki' },

  {
    path: 'vaki',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./vakers/vakers.module').then((m) => m.VakersModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
