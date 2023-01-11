import { FormGroup } from '@angular/forms';
export function validatePassword(control1: string, control2: string) {
  return (control: FormGroup): { [key: string]: boolean } | null => {
    const passwrd = control.controls[control1];
    const confirmpasswrd = control.controls[control2];
    if (passwrd.value !== confirmpasswrd.value) {
      confirmpasswrd.setErrors({ wrongPassword: true });
    }

    return null;
  };
}
