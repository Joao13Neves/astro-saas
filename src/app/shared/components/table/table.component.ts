import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { TableColumn, TableHeader } from '../../models/table.models';
import { resolveTableCell } from '../../utils/table';

interface TableViewCell {
  readonly header: TableHeader;
  readonly text: string;
  readonly truncate: boolean;
  readonly align: 'left' | 'center' | 'right';
  readonly cellClass: string;
}

interface TableViewRow {
  readonly id: string;
  readonly cells: readonly TableViewCell[];
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent<T extends object> {
  readonly columns = input.required<readonly TableColumn<T>[]>();
  readonly rows = input.required<readonly T[]>();
  readonly idKey = input.required<keyof T & string>();
  readonly emptyMessage = input('Nenhum registro encontrado.');

  readonly viewRows = computed<readonly TableViewRow[]>(() => {
    const columns = this.columns();
    const idKey = this.idKey();

    return this.rows().map((row) => ({
      id: String(row[idKey]),
      cells: columns.map((column) => ({
        header: column.header,
        text: resolveTableCell(column, row),
        truncate: column.truncate ?? false,
        align: column.align ?? 'left',
        cellClass: column.cellClass ?? '',
      })),
    }));
  });
}
