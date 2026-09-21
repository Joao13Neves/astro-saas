import { Component, Input } from '@angular/core';
import { AppButtonType, AppButtonVariant } from '../../models/ui.models';

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() type: AppButtonType = 'button';
  @Input() variant: AppButtonVariant = 'primary';
  @Input() disabled = false;
}
