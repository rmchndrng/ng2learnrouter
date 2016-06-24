import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'heroes-list',
    templateUrl: 'heroes-list.component.html',
    directives:ROUTER_DIRECTIVES
})
export class HeroesListComponent implements OnInit {

    public heroes = HEROES;
    constructor(private router:Router,private activatedRoute: ActivatedRoute) { }

    ngOnInit() { }

    heroClicked(hero:any){
        console.log('hero clicked');
        this.router.navigate(['../','view',hero.id],{relativeTo:this.activatedRoute});
    }
}

const HEROES: any[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];