import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PiApiService } from './pi/pi-api.service';

@NgModule({
    imports: [ HttpClientModule ],
    exports: [ ],
    declarations: [],
    providers: [ PiApiService ]
})
export class SharedModule {}