import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styles: ``
})
export class NavBarComponent {

  routes = routes.map(({title, path })=>({
    title: title ?? '',
    path: path ?? ''
  }));

}
