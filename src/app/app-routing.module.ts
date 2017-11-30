import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FracModule } from './frac/frac.module';

const routes: Routes = [
  { path: '', redirectTo: 'frac', pathMatch: 'full'},
  { path: 'frac', loadChildren: 'app/frac/frac.module#FracModule' }
];

@NgModule({
  imports: [
    FracModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}