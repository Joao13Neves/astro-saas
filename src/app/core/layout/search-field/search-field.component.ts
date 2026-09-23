import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  input,
  output,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime, Subject } from 'rxjs';
import { IconComponent } from '../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-search-field',
  imports: [IconComponent],
  templateUrl: './search-field.component.html',
  styleUrl: './search-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFieldComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly queryInput = new Subject<string>();

  readonly placeholder = input('Pesquisar');
  readonly queryChange = output<string>();

  constructor() {
    this.queryInput
      .pipe(debounceTime(200), takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => this.queryChange.emit(value));
  }

  onInput(event: Event): void {
    const target = event.target;

    if (!(target instanceof HTMLInputElement)) {
      return;
    }

    this.queryInput.next(target.value);
  }
}
