import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES,Router,UrlTree } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
  title = 'app works!';
  constructor(router:Router){
    const url: string = router.url;
    console.log(url);
    // we can parse it into UrlTree
    const tree: UrlTree = router.parseUrl(url);
    console.log(tree);
  }
}
