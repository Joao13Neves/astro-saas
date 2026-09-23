import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import {
  AuthBrandPosition,
  AuthRouteData,
} from '../../../../shared/models/auth.models';
import { AuthBrandComponent } from '../../components/auth-brand/auth-brand.component';

@Component({
  selector: 'app-login-layout',
  imports: [RouterOutlet, AuthBrandComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginLayoutComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  readonly brandPosition = signal<AuthBrandPosition>('left');

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

    this.brandPosition.set(data?.brandPosition ?? 'left');
  }
}
