import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'villains-list',
    templateUrl: 'villains-list.component.html',
    directives:ROUTER_DIRECTIVES
})
export class VillainsListComponent implements OnInit {

    public villains = VILLAINS;
    constructor(private router:Router,private activatedRoute: ActivatedRoute) { }

    ngOnInit() { }    
}

const VILLAINS: any[] = [
    { id: 11, name: 'Mr. Bad' },
    { id: 12, name: 'NarcoX' },
    { id: 13, name: 'BombastoX' },
    { id: 14, name: 'CeleritasX' },
    { id: 15, name: 'MagnetaX' },
    { id: 16, name: 'RubberManX' },
    { id: 17, name: 'DynamaX' },
    { id: 18, name: 'Dr IQX' },
    { id: 19, name: 'MagmaX' },
    { id: 20, name: 'TornadoX' }
];