import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { barPercent, maxValue } from '../../../../shared/utils/charts';
import { MonthlySeriesPoint } from '../../models/dashboard.models';
import { DashboardWidgetComponent } from '../dashboard-widget/dashboard-widget.component';

const Y_TICKS = [150, 125, 100, 75, 50, 0] as const;

interface MonthlyBarView {
  readonly month: string;
  readonly ticketsHeight: number;
  readonly maintenancesHeight: number;
}

@Component({
  selector: 'app-tickets-maintenance-bars',
  imports: [DashboardWidgetComponent],
  templateUrl: './tickets-maintenance-bars.component.html',
  styleUrl: './tickets-maintenance-bars.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketsMaintenanceBarsComponent {
  readonly series = input.required<readonly MonthlySeriesPoint[]>();

  readonly yTicks = Y_TICKS;

  readonly bars = computed<readonly MonthlyBarView[]>(() => {
    const series = this.series();
    const max = Math.max(
      maxValue(series.flatMap((point) => [point.tickets, point.maintenances])),
      150,
    );

    return series.map((point) => ({
      month: point.month,
      ticketsHeight: barPercent(point.tickets, max),
      maintenancesHeight: barPercent(point.maintenances, max),
    }));
  });
}
