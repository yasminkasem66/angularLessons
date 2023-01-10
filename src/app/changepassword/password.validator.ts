import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export function paswordShouldMatch(control1: string, control2: string) {
  return (control: FormGroup): {} | null => {
    const newpassword = control.controls[control1];
    const confirmnewpassword = control.controls[control2];
    if (
      newpassword.value !== confirmnewpassword.value &&
      confirmnewpassword.valid
    ) {
      confirmnewpassword.setErrors({ noMatch: true });
    }
    return null;
  };
}

export function invalidOldPassword(
  control: AbstractControl
): Promise<ValidationErrors | null> {
  return new Promise<ValidationErrors | null>((resolve, reject) => {
    setTimeout(() => {
      if (control.value != 123) {
        resolve({ invalidOldPassword: true });
      } else {
        resolve(null);
      }
    }, 2000);
  });
}

// export class passwordValidtor {
//   static passwordmatch(control: AbstractControl): ValidationErrors | null {
//     const newpassword = control.get('newpassword');
//     const confirmnewpassword = control.get('confirmnewpassword');
//     if (newpassword?.value !== confirmnewpassword?.value)
//       return { noMatch: true };
//     return null;
//   }

//   // asynchrounse valiator
//   static invalidOldPassword1(
//     control: AbstractControl
//   ): Promise<ValidationErrors | null> {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (control.value === 'jas') resolve({ shouldBeUnique: true });
//         else resolve(null);
//       }, 2000);
//     });
//   }
// }
