import { Injectable, signal } from '@angular/core';
import { AuthUser } from '../../shared/models/auth.models';

const SESSION_KEY = 'astro.auth.session';

@Injectable({ providedIn: 'root' })
export class AuthService {
  readonly user = signal<AuthUser | null>(this.readStoredUser());

  isAuthenticated(): boolean {
    return this.user() !== null;
  }

  login(email: string, remember: boolean): void {
    const user: AuthUser = {
      id: 'user-1',
      name: 'Arthur Moreira',
      firstName: 'Arthur',
      roleLabel: 'Suporte',
      email,
      avatarUrl: null,
    };

    this.user.set(user);
    this.persist(user, remember);
  }

  logout(): void {
    this.user.set(null);
    sessionStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(SESSION_KEY);
  }

  private persist(user: AuthUser, remember: boolean): void {
    sessionStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(SESSION_KEY);
    const storage = remember ? localStorage : sessionStorage;
    storage.setItem(SESSION_KEY, JSON.stringify(user));
  }

  private readStoredUser(): AuthUser | null {
    const raw =
      sessionStorage.getItem(SESSION_KEY) ?? localStorage.getItem(SESSION_KEY);

    if (!raw) {
      return null;
    }

    try {
      return JSON.parse(raw) as AuthUser;
    } catch {
      return null;
    }
  }
}
