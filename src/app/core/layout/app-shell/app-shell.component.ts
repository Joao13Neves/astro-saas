import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { USER_NAV_SECTIONS } from '../../navigation/user-nav.config';
import { SearchQueryService } from '../../search/search-query.service';
import { WorkspaceService } from '../../workspace/workspace.service';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-shell',
  imports: [RouterOutlet, SidebarComponent, HeaderComponent],
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppShellComponent {
  private readonly auth = inject(AuthService);
  private readonly workspace = inject(WorkspaceService);
  private readonly searchQuery = inject(SearchQueryService);
  private readonly router = inject(Router);

  readonly sections = USER_NAV_SECTIONS;
  readonly badges = this.workspace.badges;
  readonly user = this.auth.user;

  onLogout(): void {
    this.searchQuery.setQuery('');
    this.auth.logout();
    void this.router.navigateByUrl('/login');
  }
}
