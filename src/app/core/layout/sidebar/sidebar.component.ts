import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core';
import { IconComponent } from '../../../shared/components/icon/icon.component';
import {
  UserNavItem,
  UserNavSection,
  UserShellBadges,
} from '../../navigation/user-nav.config';
import { NavItemComponent } from '../nav-item/nav-item.component';

interface RenderedNavItem extends UserNavItem {
  readonly badge: number | null;
}

interface RenderedNavSection {
  readonly id: string;
  readonly label: string | null;
  readonly items: readonly RenderedNavItem[];
}

@Component({
  selector: 'app-sidebar',
  imports: [NavItemComponent, IconComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  readonly sections = input.required<readonly UserNavSection[]>();
  readonly badges = input.required<UserShellBadges>();
  readonly logout = output<void>();

  readonly renderedSections = computed<readonly RenderedNavSection[]>(() => {
    const badges = this.badges();

    return this.sections().map((section) => ({
      id: section.id,
      label: section.label,
      items: section.items.map((item) => ({
        ...item,
        badge: item.badgeKey ? badges[item.badgeKey] : null,
      })),
    }));
  });
}
