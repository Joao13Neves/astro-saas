import { AppIconName } from '../../shared/models/ui.models';

export type UserBadgeKey = 'notifications' | 'openTickets';

export interface UserNavItem {
  readonly id: string;
  readonly label: string;
  readonly icon: AppIconName;
  readonly path: string;
  readonly badgeKey?: UserBadgeKey;
}

export interface UserNavSection {
  readonly id: string;
  readonly label: string | null;
  readonly items: readonly UserNavItem[];
}

export interface UserShellBadges {
  readonly notifications: number;
  readonly openTickets: number;
}

export const USER_NAV_SECTIONS: readonly UserNavSection[] = [
  {
    id: 'shortcuts',
    label: null,
    items: [
      {
        id: 'notifications',
        label: 'Notificações',
        icon: 'bell',
        path: '/app/notificacoes',
        badgeKey: 'notifications',
      },
      {
        id: 'open-tickets',
        label: 'Chamados abertos',
        icon: 'ticket',
        path: '/app/chamados',
        badgeKey: 'openTickets',
      },
    ],
  },
  {
    id: 'functions',
    label: 'Funções',
    items: [
      {
        id: 'dashboard',
        label: 'Dashboard',
        icon: 'dashboard',
        path: '/app/dashboard',
      },
      {
        id: 'tickets',
        label: 'Chamados',
        icon: 'ticket',
        path: '/app/chamados',
      },
      {
        id: 'maintenance',
        label: 'Manutenções',
        icon: 'wrench',
        path: '/app/manutencoes',
      },
    ],
  },
];
