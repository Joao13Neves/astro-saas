import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from '../../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { CommonModule } from '@angular/common';
import { EsqueceuSenhaComponent } from './pages/esqueceu-senha.component/esqueceu-senha.component';
import { LoginLayoutComponent } from './pages/layout/layout.component';

@NgModule({
  declarations: [LoginComponent, EsqueceuSenhaComponent],
  imports: [CommonModule, LoginRoutingModule, SharedModule],
})
export class LoginModule {}
