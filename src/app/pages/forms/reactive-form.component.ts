import { NgForm, FormControl, Validators, FormGroup, NgModel, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive-form.component.html',
  styles: [`
     button, input {
       margin: 0 10px 10px 0;
     }
     legend {
      font-size: 18px;
     }
     fieldset {
      border:1px solid gray;
      padding: 20px;
     }
     .mail {
        width: 424px;
      }
      d-iblock{
        display: inline-block;
      }
  `]
})
export class ReactiveFormComponent implements OnInit {

  user: Object = {
    completedName: {
      name: 'Eimard',
      surname: ''
    },
    mail: '',
    password1: '',
    password2: ''
  };

  reactiveForm: FormGroup;

  constructor() {
    this.reactiveForm = new FormGroup({
      'completedName' : new FormGroup({
        'name' : new FormControl('', [Validators.required, this.hasLetterÑ]),
        'surname' : new FormControl('', [Validators.required, Validators.minLength(5)]),
      }),
      'mail' : new FormControl(''),
      'password1' : new FormControl('', Validators.required),
      'password2' : new FormControl('', Validators.required),
      'skills': new FormArray([
        new FormControl('', Validators.required)
      ])
    });

    this.reactiveForm.controls['password2'].setValidators(this.equalPassword.bind(this));
    this.reactiveForm.get('mail').setAsyncValidators(this.availableMail);
  }

  ngOnInit() {
    this.reactiveForm.valueChanges.subscribe( form => {
      console.log('%c Subscripción!! %c ValueChanges del formulario: ', 'font-wight:bold; font-size:17px; color: #c5c500','', form);
    });
    this.reactiveForm.statusChanges.subscribe( form => {
      console.log('%c Subscripción!! %c StatusChanges del Formulario:', 'font-wight:bold; font-size:17px; color: #c5c500','', form);
    });
    this.reactiveForm.controls.mail.valueChanges.subscribe( mail => {
      console.log('%c Subscripción!! %c ValueChanges de mail: ', 'font-wight:bold; font-size:17px; color: #c5c500','', mail);
    });
    this.reactiveForm.get('completedName.name').statusChanges.subscribe( nameState => {
      console.log('%c Subscripción!! %c StatusChanges de name: ', 'font-wight:bold; font-size:17px; color: #c5c500','', nameState);
    });
  }

  // ------ REACTIVE FORM ------
  sendFormData() {
    console.log('');
    console.log('%c DATOS DEL FORMULARIO', 'font-size: 15px; text-decoration: underline; font-weight:bold;color: black');
    console.log('- Formulario: ', this.reactiveForm);
    console.log('- Controles: ', this.reactiveForm.controls);
    console.log('%c Errores generales: ', 'color: red', this.reactiveForm.errors);
    console.log('%c Errores en name (modo recomendable): ', 'color: red', this.reactiveForm.get('completedName.name').errors);
    console.log('%c Errores en name (modo largo): ', 'color: red', this.reactiveForm.controls['completedName']['controls']['name'].errors);
    console.log('%c Errores en apellido: ', 'color: red', this.reactiveForm.get('completedName.surname').errors);
    console.log('%c Errores en correo: ', 'color: red', this.reactiveForm.get('mail').errors);
    console.log('%c Errores en password: ', 'color: red', this.reactiveForm.controls['password2'].errors);
    console.log('- Valores: ', this.reactiveForm.value);
    console.log('- ¿Válido?: ', this.reactiveForm.valid);
    console.log('- Estado: ', this.reactiveForm.status);
    console.log('');
  }
  
  // * Validación síncrona *
  hasLetterÑ(control: FormControl): { [k: string]: boolean } {
    // tslint:disable-next-line:curly
    if (control.value.indexOf('ñ') == -1 ) return {hasNotÑ: true};
    return null;
  }

  // * Validación síncrona *
  equalPassword(): { [k: string]: boolean } {

    if (this.reactiveForm.get('password1').value !== this.reactiveForm.get('password2').value) {
       return {noequal : true};
    }
    return null;
  }

  // * Validación asíncrona *
  availableMail(control: FormControl): Promise<{[k: string]: boolean}> {
    return new Promise( (resolve, reject) => {
      setTimeout( () => {
        if (control.value !== 'eimardOnlineInstructor@gmail.com') {
          resolve({correoNoDisponible: true });
        } else {
          resolve(null);
        }
      }, 5000);
    });
  }

  addSkill() {
    const newControl = new FormControl('', Validators.required);
    (<FormArray>this.reactiveForm.get('skills')).push(newControl);
  }

  addDisabledSkill() {
    const newControl = new FormControl({value: '', disabled: true}, Validators.required);
    (<FormArray>this.reactiveForm.get('skills')).push(newControl);
  }

  removeSkill(index: number) {
    const myFormArray: FormArray = <FormArray>this.reactiveForm.get('skills');

    myFormArray.removeAt(index);
  }

  resetOkDataForm() {
    this.reactiveForm.reset(this.user);
  }
  resetNokDataForm() {
    (<FormControl>this.reactiveForm.controls.completedName.get('name')).setValue('');
    (<FormControl>this.reactiveForm.controls.completedName.get('surname')).setValue('');
    this.reactiveForm.controls.password1.setValue('');
    this.reactiveForm.controls.password2.setValue('');
    this.reactiveForm.controls.skills.setValue([]);
    this.reactiveForm.controls.mail.setValue('');
  }

}
