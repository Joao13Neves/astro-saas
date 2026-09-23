import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconComponent } from '../../../shared/components/icon/icon.component';
import { UserNavItem } from '../../navigation/user-nav.config';

@Component({
  selector: 'app-nav-item',
  imports: [RouterLink, RouterLinkActive, IconComponent],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavItemComponent {
  readonly item = input.required<UserNavItem>();
  readonly badge = input<number | null>(null);
}
