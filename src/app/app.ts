import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './shared/sidebar/sidebar';
import { FooterComponent } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, FooterComponent],
  template: `
    <app-sidebar></app-sidebar>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `
})
export class AppComponent {}





