import { isAuthorizedGuard } from '@angular-challenges/module-to-standalone/admin/shared';
import { Routes } from '@angular/router';

export default [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('@angular-challenges/module-to-standalone/home')
  },
  {
    path: 'admin',
    canMatch: [isAuthorizedGuard],
    loadChildren: () => import('@angular-challenges/module-to-standalone/admin/feature')
  },
  {
    path: 'user',
    loadChildren: () => import('@angular-challenges/module-to-standalone/user/shell')
  },
  {
    path: 'forbidden',
    loadComponent: () => import('@angular-challenges/module-to-standalone/forbidden')
  },
] as Routes;