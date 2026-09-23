import { Injectable, signal } from '@angular/core';
import { UserShellBadges } from '../navigation/user-nav.config';

@Injectable({ providedIn: 'root' })
export class WorkspaceService {
  readonly badges = signal<UserShellBadges>({
    notifications: 3,
    openTickets: 10,
  });
}
