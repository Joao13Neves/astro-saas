import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ForgotPasswordFormControls } from '../../../../shared/models/auth.models';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { InputComponent } from '../../../../shared/components/input/input.component';
import { AuthFormComponent } from '../../components/auth-form/auth-form.component';

@Component({
  selector: 'app-esqueceu-senha',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    AuthFormComponent,
    InputComponent,
    ButtonComponent,
  ],
  templateUrl: './esqueceu-senha.component.html',
  styleUrl: './esqueceu-senha.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EsqueceuSenhaComponent {
  private readonly fb = inject(NonNullableFormBuilder);

  readonly form: FormGroup<ForgotPasswordFormControls> = this.fb.group({
    email: this.fb.control('', [Validators.required, Validators.email]),
  });

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    }
  }
}
