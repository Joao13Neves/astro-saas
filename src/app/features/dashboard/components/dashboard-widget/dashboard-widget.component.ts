import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconComponent } from '../../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-dashboard-widget',
  imports: [IconComponent],
  templateUrl: './dashboard-widget.component.html',
  styleUrl: './dashboard-widget.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardWidgetComponent {
  readonly title = input.required<string>();
}
