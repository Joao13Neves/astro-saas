import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AuthUser } from '../../../shared/models/auth.models';
import { IconComponent } from '../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-user-menu',
  imports: [IconComponent],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserMenuComponent {
  readonly user = input.required<AuthUser>();
}
