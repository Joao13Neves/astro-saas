import { TableColumn } from '../models/table.models';

export function resolveTableCell<T extends object>(
  column: TableColumn<T>,
  row: T,
): string {
  if (column.value) {
    return String(column.value(row));
  }

  if (column.key !== undefined) {
    const raw = row[column.key];
    return raw == null ? '' : String(raw);
  }

  return '';
}
