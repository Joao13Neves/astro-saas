import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { EsqueceuSenhaComponent } from './pages/esqueceu-senha.component/esqueceu-senha.component';
import { LoginLayoutComponent } from './pages/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'esqueceu-senha',
        component: EsqueceuSenhaComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
