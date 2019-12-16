import { FormControl } from '@angular/forms';

export class ShoppingValidations {
  static validNumber(formcontrol: FormControl): {[s:string]: boolean} {
    if (formcontrol.value <= 0) {
      return {'invalidNumber': true}
    } 
    return null;
  }
}
