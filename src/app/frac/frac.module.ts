import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { FracRoutingModule } from './frac-routing.module';
import { FracComponent } from './frac.component';
import { FracGraphComponent } from './graph/frac-graph.component';
import { FracService } from './shared/frac.service';

@NgModule({
    imports: [ SharedModule, FracRoutingModule ],
    exports: [],
    declarations: [ FracComponent, FracGraphComponent ],
    providers: [ FracService ],
    bootstrap: []
})
export class FracModule {}