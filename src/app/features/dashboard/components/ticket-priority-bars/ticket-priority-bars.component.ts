import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { barPercent, maxValue } from '../../../../shared/utils/charts';
import { PriorityCount } from '../../models/dashboard.models';
import { DashboardWidgetComponent } from '../dashboard-widget/dashboard-widget.component';

interface PriorityBarView {
  readonly priority: string;
  readonly label: string;
  readonly count: number;
  readonly percent: number;
}

@Component({
  selector: 'app-ticket-priority-bars',
  imports: [DashboardWidgetComponent],
  templateUrl: './ticket-priority-bars.component.html',
  styleUrl: './ticket-priority-bars.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketPriorityBarsComponent {
  readonly items = input.required<readonly PriorityCount[]>();

  readonly bars = computed<readonly PriorityBarView[]>(() => {
    const items = this.items();
    const max = maxValue(items.map((item) => item.count)) || 1;

    return items.map((item) => ({
      priority: item.priority,
      label: item.label,
      count: item.count,
      percent: barPercent(item.count, max),
    }));
  });
}
