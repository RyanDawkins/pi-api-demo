import { Component } from '@angular/core';
import { FracService } from './shared/frac.service';
import 'rxjs/add/operator/catch';

@Component({
    selector: 'frac',
    templateUrl: './frac.component.html',
    styleUrls: ['./frac.component.css']
})
export class FracComponent {

    constructor(
        private fracService: FracService
    ) {}

    ngOnInit() {
        console.log("ngOnInit()");
        this.fracService.getFracData()
            .subscribe(piElements => {
                console.log("piElements", piElements);
            }, error => {
                console.error(error);
            });
    }

}