import { Routes } from '@angular/router';
import { BlankLayoutComponent } from './pages/blank-layout/blank-layout.component';
import { HomeComponent } from './pages/blank-layout/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: BlankLayoutComponent,
    children: [{ path: '', component: HomeComponent }],
  },
];
