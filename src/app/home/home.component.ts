import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES,Router } from '@angular/router';
@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html',
    directives:[ROUTER_DIRECTIVES]
})
export class HomeComponent implements OnInit {
    constructor(private router:Router) { }

    ngOnInit() { }    
} 