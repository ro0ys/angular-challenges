import { Routes } from '@angular/router';
import { UserShellComponent } from './user-shell.component';
import { provideToken } from '@angular-challenges/module-to-standalone/core/providers';

export default [
  {
    path: '',
    component: UserShellComponent,
    providers: [provideToken('ro0ys')],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () => import('@angular-challenges/module-to-standalone/user/home')
      },
      {
        path: 'contact',
        loadChildren: () => import('@angular-challenges/module-to-standalone/user/contact')
      },
    ],
  },
] as Routes;