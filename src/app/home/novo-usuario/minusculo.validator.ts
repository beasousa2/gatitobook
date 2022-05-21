import { AbstractControl, FormControl } from "@angular/forms";

export function minusculoValidator(control: FormControl) {
  const value = control.value as String;
  if(value !== value.toLocaleLowerCase()) {
    return {'minusculo' : true}
  } else {
    return null;
  }
}
