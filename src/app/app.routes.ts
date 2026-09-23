import { Routes } from '@angular/router';
import {
  authGuard,
  guestGuard,
  homeRedirectGuard,
} from './core/auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    canActivate: [homeRedirectGuard],
    children: [],
  },
  {
    path: 'login',
    canActivate: [guestGuard],
    loadChildren: () =>
      import('./features/login/login.routes').then((m) => m.LOGIN_ROUTES),
  },
  {
    path: 'app',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./core/layout/app-shell/app-shell.component').then(
        (m) => m.AppShellComponent,
      ),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./features/dashboard/dashboard.routes').then(
            (m) => m.DASHBOARD_ROUTES,
          ),
      },
      {
        path: 'chamados',
        loadComponent: () =>
          import('./core/layout/placeholder-page/placeholder-page.component').then(
            (m) => m.PlaceholderPageComponent,
          ),
        data: { title: 'Chamados' },
      },
      {
        path: 'manutencoes',
        loadComponent: () =>
          import('./core/layout/placeholder-page/placeholder-page.component').then(
            (m) => m.PlaceholderPageComponent,
          ),
        data: { title: 'Manutenções' },
      },
      {
        path: 'notificacoes',
        loadComponent: () =>
          import('./core/layout/placeholder-page/placeholder-page.component').then(
            (m) => m.PlaceholderPageComponent,
          ),
        data: { title: 'Notificações' },
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
