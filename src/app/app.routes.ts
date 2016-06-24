import { provideRouter, RouterConfig } from '@angular/router';

import {HomeComponent} from './home/home.component'
import { HeroesComponent, HeroesListComponent, HeroViewComponent }  from './heroes/';
import { VillainsComponent, VillainsListComponent, VillainViewComponent }  from './villains/';

export const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/home',
    terminal: true
  },
  { path: 'home', component: HomeComponent },
  {
    path: 'heroes', component: HeroesComponent, outlet: 'left',
    children: [
      { path: 'list', component: HeroesListComponent },
      { path: 'view/:id', component: HeroViewComponent },
    ]
  },
  {
    path: 'villains', component: VillainsComponent, outlet: 'right',
    children: [
      { path: 'list', component: VillainsListComponent },
      { path: 'view/:id', component: VillainViewComponent },
    ]
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];