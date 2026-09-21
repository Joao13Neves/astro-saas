import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { EsqueceuSenhaComponent } from './pages/esqueceu-senha.component/esqueceu-senha.component';
import { RecuperarSenhaComponent } from './pages/recuperar-senha/recuperar-senha.component';
import { LoginLayoutComponent } from './pages/layout/layout.component';
import { AuthRouteData } from '../../shared/models/auth.models';

const routes: Routes = [
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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
