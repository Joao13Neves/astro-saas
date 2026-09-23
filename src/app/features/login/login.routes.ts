import { Routes } from '@angular/router';
import { AuthRouteData } from '../../shared/models/auth.models';
import { EsqueceuSenhaComponent } from './pages/esqueceu-senha.component/esqueceu-senha.component';
import { LoginLayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { RecuperarSenhaComponent } from './pages/recuperar-senha/recuperar-senha.component';

export const LOGIN_ROUTES: Routes = [
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
        data: { brandPosition: 'left' } satisfies AuthRouteData,
      },
      {
        path: 'esqueceu-senha',
        component: EsqueceuSenhaComponent,
        data: { brandPosition: 'right' } satisfies AuthRouteData,
      },
      {
        path: 'recuperar-senha',
        component: RecuperarSenhaComponent,
        data: { brandPosition: 'left' } satisfies AuthRouteData,
      },
    ],
  },
];
