import { Component, inject } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { ForgotPasswordFormControls } from '../../../../shared/models/auth.models';

@Component({
  selector: 'app-esqueceu-senha',
  standalone: false,
  templateUrl: './esqueceu-senha.component.html',
  styleUrl: './esqueceu-senha.component.scss',
})
export class EsqueceuSenhaComponent {
  private readonly fb = inject(NonNullableFormBuilder);

  readonly form: FormGroup<ForgotPasswordFormControls> = this.fb.group({
    email: this.fb.control('', [Validators.required, Validators.email]),
  });

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
  }
}
