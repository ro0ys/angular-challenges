import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./dashboard/dashboard.component')
  },
  {
    path: 'create-contact',
    loadComponent: () => import('./create-contact/create-contact.component')
  }
] as Routes;