import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.routes';

// Shared components
import { NavbarComponent } from './shared/navbar/navbar';
import { FooterComponent } from './shared/footer/footer';
import { SidebarComponent } from './shared/sidebar/sidebar';

// Pages
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { ProjectsComponent } from './pages/projects/projects';
import { ServicesComponent } from './pages/services/services';
import { ContactComponent } from './pages/contact/contact';

export const appConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(BrowserModule)
  ],
  standaloneComponents: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent,  // ✅ Include this
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ServicesComponent,
    ContactComponent
  ]
};



