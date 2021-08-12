import { AbstractControl, ValidatorFn } from "@angular/forms";

export function MinChar(longueur : number) : ValidatorFn {
    return (control : AbstractControl) => {
        let myValue : string = control.value
        if(myValue == null) return null;
        if(control.dirty && myValue.length < longueur) return {TropCourtError : "Le champ doit contenir minimum" + longueur + " charactère(s)"}
        return null;
    }
}