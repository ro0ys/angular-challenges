import { Routes } from '@angular/router';

export default  [
 {
  path: '',
  loadComponent: () => import('./dashboard/dashboard.component')
 },
 {
  path: 'create-user',
  loadComponent: () => import('./create-user/create-user.component')
 }
] as Routes;