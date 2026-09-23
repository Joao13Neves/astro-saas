import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { SearchQueryService } from '../../../../core/search/search-query.service';
import { filterTickets } from '../../../../shared/utils/ticket-search';
import { RecentTicketsTableComponent } from '../../components/recent-tickets-table/recent-tickets-table.component';
import { TicketPriorityBarsComponent } from '../../components/ticket-priority-bars/ticket-priority-bars.component';
import { TicketStatsDonutComponent } from '../../components/ticket-stats-donut/ticket-stats-donut.component';
import { TicketsMaintenanceBarsComponent } from '../../components/tickets-maintenance-bars/tickets-maintenance-bars.component';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard-user',
  imports: [
    RecentTicketsTableComponent,
    TicketPriorityBarsComponent,
    TicketStatsDonutComponent,
    TicketsMaintenanceBarsComponent,
  ],
  templateUrl: './dashboard-user.component.html',
  styleUrl: './dashboard-user.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardUserComponent {
  private readonly dashboardService = inject(DashboardService);
  private readonly searchQuery = inject(SearchQueryService);

  readonly dashboard = toSignal(this.dashboardService.loadDashboard(), {
    initialValue: null,
  });

  readonly visibleTickets = computed(() => {
    const data = this.dashboard();

    if (!data) {
      return [];
    }

    return filterTickets(data.recentTickets, this.searchQuery.query());
  });
}
