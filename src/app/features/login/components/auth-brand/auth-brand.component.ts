import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-auth-brand',
  standalone: false,
  templateUrl: './auth-brand.component.html',
  styleUrl: './auth-brand.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthBrandComponent {}
