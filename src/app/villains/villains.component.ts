import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
    moduleId: module.id,
    selector: 'villains',
    templateUrl: 'villains.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class VillainsComponent implements OnInit {
    constructor() { 
        
    }

    ngOnInit() { }
 
}