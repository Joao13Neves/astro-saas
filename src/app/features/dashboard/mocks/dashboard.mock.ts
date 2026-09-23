import { UserDashboard } from '../models/dashboard.models';

export const USER_DASHBOARD_MOCK: UserDashboard = {
  recentTickets: [
    {
      id: 'tkt-01',
      number: '#01',
      requester: 'Arthur Moreira',
      openedAt: '01/08/2023',
      category: 'Hardware',
      subject: 'Troca de pasta térmica',
      priority: 'baixa',
    },
    {
      id: 'tkt-02',
      number: '#01',
      requester: 'Arthur Moreira',
      openedAt: '01/08/2023',
      category: 'Hardware',
      subject: 'Troca de pasta térmica',
      priority: 'baixa',
    },
    {
      id: 'tkt-03',
      number: '#01',
      requester: 'Arthur Moreira',
      openedAt: '01/08/2023',
      category: 'Hardware',
      subject: 'Troca de pasta térmica',
      priority: 'baixa',
    },
  ],
  priorities: [
    { priority: 'urgente', label: 'Urgente', count: 2 },
    { priority: 'alta', label: 'Alta', count: 0 },
    { priority: 'media', label: 'Média', count: 0 },
    { priority: 'baixa', label: 'Baixa', count: 10 },
  ],
  stats: {
    total: 14,
    items: [
      {
        status: 'em_progresso',
        label: 'Em progresso',
        count: 10,
        color: 'var(--color-primary-blue)',
      },
      {
        status: 'impedido',
        label: 'Impedidos',
        count: 1,
        color: 'var(--color-secundary-yellow)',
      },
      {
        status: 'rejeitado',
        label: 'Rejeitados',
        count: 1,
        color: 'var(--color-secundary-red)',
      },
      {
        status: 'finalizado',
        label: 'Finalizados',
        count: 1,
        color: 'var(--color-secundary-green)',
      },
    ],
  },
  monthly: [
    { month: 'Jan 23', tickets: 38, maintenances: 52 },
    { month: 'Fev 23', tickets: 22, maintenances: 18 },
    { month: 'Mar 23', tickets: 68, maintenances: 86 },
    { month: 'Abr 23', tickets: 28, maintenances: 44 },
    { month: 'Mai 23', tickets: 54, maintenances: 48 },
    { month: 'Jun 23', tickets: 32, maintenances: 40 },
    { month: 'Jul 23', tickets: 82, maintenances: 104 },
    { month: 'Ago 23', tickets: 44, maintenances: 70 },
    { month: 'Set 23', tickets: 34, maintenances: 46 },
    { month: 'Out 23', tickets: 48, maintenances: 56 },
    { month: 'Nov 23', tickets: 70, maintenances: 112 },
    { month: 'Dez 23', tickets: 40, maintenances: 50 },
  ],
};
