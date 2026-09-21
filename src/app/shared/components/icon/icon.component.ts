import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AppIconName } from '../../models/ui.models';

@Component({
  selector: 'app-icon',
  standalone: false,
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  @Input({ required: true }) name!: AppIconName;
  @Input() size = 18;
}
