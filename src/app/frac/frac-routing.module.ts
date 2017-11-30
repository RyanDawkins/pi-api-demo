import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FracComponent } from './frac.component';

const routes = [
    { path: '', component: FracComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FracRoutingModule { }