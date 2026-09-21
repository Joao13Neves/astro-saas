import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import {
  AuthBrandPosition,
  AuthRouteData,
} from '../../../../shared/models/auth.models';

@Component({
  selector: 'app-login-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LoginLayoutComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  brandPosition: AuthBrandPosition = 'left';

  constructor() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => {
        this.syncBrandPosition();
      });
  }

  ngOnInit(): void {
    this.syncBrandPosition();
  }

  private syncBrandPosition(): void {
    const data = this.route.firstChild?.snapshot.data as
      | Partial<AuthRouteData>
      | undefined;

    this.brandPosition = data?.brandPosition ?? 'left';
  }
}
