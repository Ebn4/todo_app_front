import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    'path' : '',
    'component' : HomeComponent
  },
  {
    'path' : 'register',
    'component' : RegisterComponent
  },
  {
    'path' : 'login',
    'component' : LoginComponent
  },
  {
    'path' : '**',
    'component' : NotFoundComponent
  }
];
