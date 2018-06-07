import { Routes } from '@angular/router';

import {TemplateComponent} from './components/template/template.component';


export const ROUTES: Routes = [
  { path: 'home', component: TemplateComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
