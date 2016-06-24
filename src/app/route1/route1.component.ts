import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'route1',
    templateUrl: 'route1.component.html'
})
export class Route1Component implements OnInit {
    constructor() { 
        console.log('Route1Component constructor');
    }

    ngOnInit() { }

}