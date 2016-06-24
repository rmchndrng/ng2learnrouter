import { provideRouter, RouterConfig } from '@angular/router';

import { Route1Component }  from './route1/';
import { Route2Component }  from './route2/';

export const routes: RouterConfig = [
   {
    path: '',
    redirectTo: '/route1',
    terminal: true
  },
  { path: 'route1', component: Route1Component },
  { path: 'route2', component: Route2Component }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];