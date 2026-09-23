import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TableComponent } from '../../../../shared/components/table/table.component';
import { TableColumn, TableHeader } from '../../../../shared/models/table.models';
import { RecentTicket, TICKET_PRIORITY_LABELS } from '../../models/dashboard.models';
import { DashboardWidgetComponent } from '../dashboard-widget/dashboard-widget.component';

export const RecentTicketsCellClass = {
  Identity: 'recent-tickets-cell--identity',
} as const;

@Component({
  selector: 'app-recent-tickets-table',
  imports: [DashboardWidgetComponent, TableComponent],
  templateUrl: './recent-tickets-table.component.html',
  styleUrl: './recent-tickets-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecentTicketsTableComponent {
  readonly tickets = input.required<readonly RecentTicket[]>();

  readonly columns: readonly TableColumn<RecentTicket>[] = [
    {
      header: TableHeader.TicketNumber,
      key: 'number',
      cellClass: RecentTicketsCellClass.Identity,
    },
    {
      header: TableHeader.Requester,
      key: 'requester',
      cellClass: RecentTicketsCellClass.Identity,
    },
    { header: TableHeader.OpenedAt, key: 'openedAt' },
    { header: TableHeader.Category, key: 'category' },
    { header: TableHeader.Subject, key: 'subject', truncate: true },
    {
      header: TableHeader.Priority,
      value: (row) => TICKET_PRIORITY_LABELS[row.priority],
    },
  ];
}
