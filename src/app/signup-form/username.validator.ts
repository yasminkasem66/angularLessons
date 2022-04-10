import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidtor {
  // this is a validtor function
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    // if we have a space in the username it'll show an error
    if ((control.value as String).indexOf(' ') >= 0)
      return { cannotContainSpace: true };
    //  return { minLength :{requiredLength :10, actualLength: control.value.length} };
    return null;
  }

  // asynchrounse valiator
  static shouldBeUnique(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'jas')
          resolve({ shouldBeUnique: true });
        else  resolve(null);
      }, 2000);
    });
  }
}
