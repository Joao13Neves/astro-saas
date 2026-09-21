import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppIconName, AppInputType } from '../../models/ui.models';

@Component({
  selector: 'app-input',
  standalone: false,
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() label = '';
  @Input() labelColor = '';
  @Input() isRequired = false;
  @Input() name = '';
  @Input({ required: true }) control!: FormControl<string>;
  @Input() placeholder = '';
  @Input() type: AppInputType = 'text';
  @Input() icon: AppIconName | null = null;
  @Input() autocomplete = 'off';

  isPasswordVisible = false;

  get inputId(): string {
    return this.name || 'app-input';
  }

  get resolvedType(): AppInputType {
    if (this.type !== 'password') {
      return this.type;
    }

    return this.isPasswordVisible ? 'text' : 'password';
  }

  get toggleIcon(): AppIconName {
    return this.isPasswordVisible ? 'eye-off' : 'eye';
  }

  get toggleLabel(): string {
    return this.isPasswordVisible ? 'Ocultar senha' : 'Mostrar senha';
  }

  get errorMessage(): string | null {
    if (!this.control.touched || !this.control.errors) {
      return null;
    }

    if (this.control.errors['required']) {
      return 'Campo obrigatório';
    }

    if (this.control.errors['email']) {
      return 'Informe um email válido';
    }

    if (this.control.errors['minlength']) {
      const requiredLength = this.control.errors['minlength']
        .requiredLength as number;
      return `Mínimo de ${requiredLength} caracteres`;
    }

    if (this.control.errors['passwordsMismatch']) {
      return 'As senhas não coincidem';
    }

    return 'Valor inválido';
  }

  togglePasswordVisibility(): void {
    if (this.type !== 'password') {
      return;
    }

    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
