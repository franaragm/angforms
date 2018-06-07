import { Routes } from '@angular/router';

import {TemplateComponent} from './components/template/template.component';
import {DataComponent} from './components/data/data.component';


export const ROUTES: Routes = [
  { path: 'home', component: TemplateComponent },
  { path: 'datademo', component: DataComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
