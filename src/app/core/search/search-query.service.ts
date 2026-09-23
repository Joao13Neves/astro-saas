import { computed, Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SearchQueryService {
  private readonly rawQuery = signal('');

  readonly query = computed(() => this.rawQuery().trim().toLowerCase());

  setQuery(value: string): void {
    this.rawQuery.set(value);
  }
}
