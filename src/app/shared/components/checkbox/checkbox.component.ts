import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  standalone: false,
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent {
  @Input() label = '';
  @Input() name = '';
  @Input({ required: true }) control!: FormControl<boolean>;

  get inputId(): string {
    return this.name || 'app-checkbox';
  }
}
