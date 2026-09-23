import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../core/auth/auth.service';
import { LoginFormControls } from '../../../../shared/models/auth.models';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { CheckboxComponent } from '../../../../shared/components/checkbox/checkbox.component';
import { InputComponent } from '../../../../shared/components/input/input.component';
import { AuthFormComponent } from '../../components/auth-form/auth-form.component';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    AuthFormComponent,
    InputComponent,
    CheckboxComponent,
    ButtonComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  readonly form: FormGroup<LoginFormControls> = this.fb.group({
    email: this.fb.control('', [Validators.required, Validators.email]),
    password: this.fb.control('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    remember: this.fb.control(false),
  });

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { email, remember } = this.form.getRawValue();
    this.auth.login(email, remember);
    void this.router.navigateByUrl('/app/dashboard');
  }
}
