import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  input,
  signal,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { merge } from 'rxjs';
import { AppIconName, AppInputType } from '../../models/ui.models';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule, IconComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  readonly label = input('');
  readonly labelColor = input('');
  readonly isRequired = input(false);
  readonly name = input('');
  readonly control = input.required<FormControl<string>>();
  readonly placeholder = input('');
  readonly type = input<AppInputType>('text');
  readonly icon = input<AppIconName | null>(null);
  readonly autocomplete = input('off');

  readonly isPasswordVisible = signal(false);
  private readonly validationTick = signal(0);

  readonly inputId = computed(() => this.name() || 'app-input');

  readonly resolvedType = computed<AppInputType>(() => {
    if (this.type() !== 'password') {
      return this.type();
    }

    return this.isPasswordVisible() ? 'text' : 'password';
  });

  readonly toggleIcon = computed<AppIconName>(() =>
    this.isPasswordVisible() ? 'eye-off' : 'eye',
  );

  readonly toggleLabel = computed(() =>
    this.isPasswordVisible() ? 'Ocultar senha' : 'Mostrar senha',
  );

  readonly errorMessage = computed(() => {
    this.validationTick();
    const control = this.control();

    if (!control.touched || !control.errors) {
      return null;
    }

    if (control.errors['required']) {
      return 'Campo obrigatório';
    }

    if (control.errors['email']) {
      return 'Informe um email válido';
    }

    if (control.errors['minlength']) {
      const requiredLength = control.errors['minlength']
        .requiredLength as number;
      return `Mínimo de ${requiredLength} caracteres`;
    }

    if (control.errors['passwordsMismatch']) {
      return 'As senhas não coincidem';
    }

    return 'Valor inválido';
  });

  constructor() {
    effect((onCleanup) => {
      const control = this.control();
      const subscription = merge(control.statusChanges, control.events).subscribe(
        () => this.validationTick.update((tick) => tick + 1),
      );

      onCleanup(() => subscription.unsubscribe());
    });
  }

  togglePasswordVisibility(): void {
    if (this.type() !== 'password') {
      return;
    }

    this.isPasswordVisible.update((visible) => !visible);
  }
}
