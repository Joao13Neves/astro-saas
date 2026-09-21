import { FormControl } from '@angular/forms';

export type AuthBrandPosition = 'left' | 'right';

export interface AuthRouteData {
  readonly brandPosition: AuthBrandPosition;
}

export interface LoginFormValue {
  email: string;
  password: string;
  remember: boolean;
}

export interface LoginFormControls {
  email: FormControl<string>;
  password: FormControl<string>;
  remember: FormControl<boolean>;
}

export interface ForgotPasswordFormValue {
  email: string;
}

export interface ForgotPasswordFormControls {
  email: FormControl<string>;
}

export interface ResetPasswordFormValue {
  email: string;
  password: string;
  confirmation: string;
}

export interface ResetPasswordFormControls {
  email: FormControl<string>;
  password: FormControl<string>;
  confirmation: FormControl<string>;
}
