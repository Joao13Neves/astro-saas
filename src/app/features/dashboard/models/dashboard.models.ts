export type TicketPriority = 'urgente' | 'alta' | 'media' | 'baixa';

export type TicketStatus =
  | 'em_progresso'
  | 'impedido'
  | 'rejeitado'
  | 'finalizado';

export interface RecentTicket {
  readonly id: string;
  readonly number: string;
  readonly requester: string;
  readonly openedAt: string;
  readonly category: string;
  readonly subject: string;
  readonly priority: TicketPriority;
}

export interface PriorityCount {
  readonly priority: TicketPriority;
  readonly label: string;
  readonly count: number;
}

export interface StatusCount {
  readonly status: TicketStatus;
  readonly label: string;
  readonly count: number;
  readonly color: string;
}

export interface TicketStats {
  readonly total: number;
  readonly items: readonly StatusCount[];
}

export interface MonthlySeriesPoint {
  readonly month: string;
  readonly tickets: number;
  readonly maintenances: number;
}

export interface UserDashboard {
  readonly recentTickets: readonly RecentTicket[];
  readonly priorities: readonly PriorityCount[];
  readonly stats: TicketStats;
  readonly monthly: readonly MonthlySeriesPoint[];
}

export const TICKET_PRIORITY_LABELS: Record<TicketPriority, string> = {
  urgente: 'Urgente',
  alta: 'Alta',
  media: 'Média',
  baixa: 'Baixa',
};
