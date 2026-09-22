import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { EsqueceuSenhaComponent } from './pages/esqueceu-senha.component/esqueceu-senha.component';
import { RecuperarSenhaComponent } from './pages/recuperar-senha/recuperar-senha.component';
import { LoginLayoutComponent } from './pages/layout/layout.component';
import { AuthBrandComponent } from './components/auth-brand/auth-brand.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';

@NgModule({
  declarations: [
    LoginLayoutComponent,
    AuthBrandComponent,
    AuthFormComponent,
    LoginComponent,
    EsqueceuSenhaComponent,
    RecuperarSenhaComponent,
  ],
  imports: [SharedModule, LoginRoutingModule],
})
export class LoginModule {}
