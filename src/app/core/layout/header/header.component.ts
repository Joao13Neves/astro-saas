import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { AuthUser } from '../../../shared/models/auth.models';
import { greetingForHour } from '../../../shared/utils/greeting';
import { SearchQueryService } from '../../search/search-query.service';
import { SearchFieldComponent } from '../search-field/search-field.component';
import { UserMenuComponent } from '../user-menu/user-menu.component';

@Component({
  selector: 'app-header',
  imports: [SearchFieldComponent, UserMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly searchQuery = inject(SearchQueryService);

  readonly user = input.required<AuthUser>();

  readonly greeting = computed(() => greetingForHour(new Date().getHours()));

  onSearch(value: string): void {
    this.searchQuery.setQuery(value);
  }
}
