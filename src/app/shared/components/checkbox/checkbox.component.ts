import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  imports: [ReactiveFormsModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxComponent {
  readonly label = input('');
  readonly name = input('');
  readonly control = input.required<FormControl<boolean>>();

  readonly inputId = computed(() => this.name() || 'app-checkbox');
}
