import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'route2',
    templateUrl: 'route2.component.html'
})
export class Route2Component implements OnInit {
    constructor() { 
        console.log('Route1Component constructor');
    }

    ngOnInit() { }

}