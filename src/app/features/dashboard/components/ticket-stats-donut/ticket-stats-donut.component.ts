import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { DonutSlice, toDonutRings } from '../../../../shared/utils/charts';
import { TicketStats } from '../../models/dashboard.models';
import { DashboardWidgetComponent } from '../dashboard-widget/dashboard-widget.component';

const DONUT_RADIUS = 48;
const DONUT_CIRCUMFERENCE = 2 * Math.PI * DONUT_RADIUS;

@Component({
  selector: 'app-ticket-stats-donut',
  imports: [DashboardWidgetComponent],
  templateUrl: './ticket-stats-donut.component.html',
  styleUrl: './ticket-stats-donut.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketStatsDonutComponent {
  readonly stats = input.required<TicketStats>();

  readonly rings = computed(() => {
    const slices: readonly DonutSlice[] = this.stats().items.map((item) => ({
      id: item.status,
      value: item.count,
      color: item.color,
    }));

    return toDonutRings(slices, DONUT_CIRCUMFERENCE);
  });
}
