import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: false,
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() label: string = '';
  @Input() labelColor: string = '';
  @Input() isRequired: boolean = false;
  @Input() name: string = '';
  @Input() control!: AbstractControl;
  @Input() placeholder: string = '';

  get formControl(): FormControl {
    return this.control as FormControl;
  }
}
