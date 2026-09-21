import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function matchControlValueValidator(otherControlName: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const parent = control.parent;

    if (!parent) {
      return null;
    }

    const otherControl = parent.get(otherControlName);
    const currentValue = control.value as string | null;
    const otherValue = otherControl?.value as string | null;

    if (!currentValue || !otherValue) {
      return null;
    }

    return currentValue === otherValue ? null : { passwordsMismatch: true };
  };
}
