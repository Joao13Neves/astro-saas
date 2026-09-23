import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AppIconName } from '../../models/ui.models';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  readonly name = input.required<AppIconName>();
  readonly size = input(18);
}
