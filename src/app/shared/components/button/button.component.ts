import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AppButtonType, AppButtonVariant } from '../../models/ui.models';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  readonly type = input<AppButtonType>('button');
  readonly variant = input<AppButtonVariant>('primary');
  readonly disabled = input(false);
}
