import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

import { MinChar } from './validator/MinChar.validator';

@Component({
  selector: 'app-demo8',
  templateUrl: './demo8.component.html',
  styleUrls: ['./demo8.component.scss']
})
export class Demo8Component implements OnInit {

  myFormGroup : FormGroup = this._formBuild.group({})

  constructor(
    private _formBuild : FormBuilder
  ) { }

  ngOnInit(): void {
    this.myFormGroup = this._formBuild.group({
      nom : ["", [Validators.required, this.Min5Char()]],
      prenom : ["", [Validators.required, MinChar(4)]],
      email : ["", [Validators.required, Validators.email]],
      telephone : this._formBuild.array([])

    }, Validators.required)
  }

  getTelArray() : FormArray {
    return this.myFormGroup.get('telephone') as FormArray
  }

  addControlToArray() {
    this.getTelArray().push(new FormControl('', Validators.required))
  }

  onSubmit() {
    console.log("nom : " + this.myFormGroup.value['nom'])
    console.log("Prénom : " + this.myFormGroup.value['prenom'])
    console.log("E-mail : " + this.myFormGroup.value['email'])
    console.log("Tel " + this.myFormGroup.value['telephone'].length)
  }

  Min5Char() : ValidatorFn {
    return (control : AbstractControl) => {
      let myValue : string = control.value
      if(myValue == null) return null;
      if(control.dirty && myValue.length < 5) return {TropCourt : "Le champ doit contenir minimum 5 charactères"}
      return null
    }
  }

  /*
    control.pristine => le controle n'a pas encore été toucher / utiliser
    control.touched => le controle a déjà été utiliser 
    control.dirty => en cours d'utilisation mais invalide
  */

}
