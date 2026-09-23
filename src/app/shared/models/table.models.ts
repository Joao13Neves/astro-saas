export const TableHeader = {
  TicketNumber: 'Nº chamado',
  Requester: 'Solicitante',
  OpenedAt: 'Data abertura',
  Category: 'Categoria',
  Subject: 'Assunto',
  Priority: 'Prioridade',
} as const;

export type TableHeader = (typeof TableHeader)[keyof typeof TableHeader];

export type TableColumnAlign = 'left' | 'center' | 'right';

interface TableColumnBase<T extends object> {
  readonly header: TableHeader;
  readonly truncate?: boolean;
  readonly align?: TableColumnAlign;
  readonly cellClass?: string;
}

export type TableColumn<T extends object> = TableColumnBase<T> &
  (
    | {
        readonly key: keyof T & string;
        readonly value?: never;
      }
    | {
        readonly key?: keyof T & string;
        readonly value: (row: T) => string | number;
      }
  );
