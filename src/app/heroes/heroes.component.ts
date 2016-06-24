import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
    moduleId: module.id,
    selector: 'heroes',
    templateUrl: 'heroes.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class HeroesComponent implements OnInit {
    constructor() { 
        
    }

    ngOnInit() { }
 
}