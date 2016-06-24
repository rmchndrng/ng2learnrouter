import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'hero-view',
    templateUrl: 'hero-view.component.html',
    directives:ROUTER_DIRECTIVES
})
export class HeroViewComponent implements OnInit {
    constructor(private route: ActivatedRoute) {

    }
    private id;
    private sub: any;
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }




}