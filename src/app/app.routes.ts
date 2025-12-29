import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page.component/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page';
import { ContactPageComponent } from './pages/contact-page.component/contact-page.component';

export const routes: Routes = [

  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: '**', redirectTo: '' },

];
