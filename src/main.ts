import { bootstrap } from '@angular/platform-browser-dynamic';
// Add these symbols to override the `LocationStrategy`
import { LocationStrategy,
         HashLocationStrategy } from '@angular/common';

import { enableProdMode } from '@angular/core';
import { AppComponent, environment, APP_ROUTER_PROVIDERS  } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  { provide: LocationStrategy, useClass: HashLocationStrategy }
]);

