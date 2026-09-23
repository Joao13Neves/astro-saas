import { ChangeDetectionStrategy, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ResetPasswordFormControls } from '../../../../shared/models/auth.models';
import { matchControlValueValidator } from '../../../../shared/validators/password-match.validator';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { InputComponent } from '../../../../shared/components/input/input.component';
import { AuthFormComponent } from '../../components/auth-form/auth-form.component';

@Component({
  selector: 'app-recuperar-senha',
  imports: [
    ReactiveFormsModule,
    AuthFormComponent,
    InputComponent,
    ButtonComponent,
  ],
  templateUrl: './recuperar-senha.component.html',
  styleUrl: './recuperar-senha.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecuperarSenhaComponent {
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly destroyRef = inject(DestroyRef);

  readonly form: FormGroup<ResetPasswordFormControls> = this.fb.group({
    email: this.fb.control('', [Validators.required, Validators.email]),
    password: this.fb.control('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    confirmation: this.fb.control('', [
      Validators.required,
      matchControlValueValidator('password'),
    ]),
  });

  constructor() {
    this.form.controls.password.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.form.controls.confirmation.updateValueAndValidity();
      });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    }
  }
}
