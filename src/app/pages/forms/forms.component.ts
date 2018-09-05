import { NgForm, FormControl, Validators, FormGroup, NgModel, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styles: []
})
export class FormsComponent implements OnInit {
  // ------ TEMPLATE FORM ------
  userForm1: Object = {
    nameForm1: '',
    pass1Form1: '',
    pass2Form1: ''
  };
  // ----------------------------



  // ------ REACTIVE FORM ------
  userForm2: Object = {
    completedNameForm2: {
      name: 'Eimard',
      surname: ''
    },
    pass1Form2: '',
    pass2Form2: ''
  };

  form2: FormGroup;
  // ----------------------------

  constructor() {
    this.form2 = new FormGroup({
      'completedNameForm2' : new FormGroup({
        'name' : new FormControl('', [Validators.required, this.isEimard]),
        'surname' : new FormControl(''),
      }),
      'pass1Form2' : new FormControl('', Validators.required),
      'pass2Form2' : new FormControl('', Validators.required),
      'skills': new FormArray([
        new FormControl('', Validators.required)
      ])
    });

    this.form2.controls['pass2Form2'].setValidators(this.equalPasswordForm2.bind(this));
    this.form2.get('completedNameForm2.surname').setAsyncValidators(this.availableSurname);
  }


  ngOnInit() {
    // this.form2.valueChanges.subscribe( form => {
    //   console.log('--------- Valores de formulario', form);
    // });
    this.form2.statusChanges.subscribe( form => {
        console.log('- Estado: ', form);
    });
  }

  // ------ TEMPLATE FORM ------
  sendTemplateForm(form: NgForm) {
    console.log('------ FORMULARIO TEMPLATE ------');
    console.log('- Formulario: ', form);
    console.log('- Controles: ', form.controls);
    console.log('- Errores generales: ', form.errors);
    console.log('- Error en name: ', form.controls['nameForm1'].errors);
    console.log('- Valores: ', form.value);
    console.log('- ¿Válido?: ', form.valid);
    console.log('- Estado: ', form.status);
  }
  resetOkTemplateForm(form: NgForm) {
    form.reset();
  }
  resetNokTemplateForm(form: NgForm) {
    form.controls.nameForm1.setValue('');
    form.controls.pass1Form1.setValue('');
    form.controls.pass2Form1.setValue('');
  }
  equalPasswordForm1(pass1: NgModel, pass2: NgModel) {
    let state = false;
    if (pass1.touched || pass2.touched) {
      state = true;
      // tslint:disable-next-line:curly
      if ( pass1.value === pass2.value && pass1.value !== '' ) state = false;
    }
    return state;
  }
  // ----------------------------



  // ------ REACTIVE FORM ------
  sendDataForm() {
    console.log('------ FORMULARIO REACTIVO ------');
    console.log('- Formulario: ', this.form2);
    console.log('- Controles: ', this.form2.controls);
    console.log('- Errores generales: ', this.form2.errors);
    console.log('--- Errores en name (modo recomendable): ', this.form2.get('completedNameForm2.name').errors);
    console.log('--- Errores en name (modo largo): ', this.form2.controls['completedNameForm2']['controls']['name'].errors);
    console.log('--- Errores en apellido: ', this.form2.get('completedNameForm2.surname').errors);
    console.log('- Errores en password: ', this.form2.controls['pass2Form2'].errors);
    console.log('- Valores: ', this.form2.value);
    console.log('- ¿Válido?: ', this.form2.valid);
    console.log('- Estado: ', this.form2.status);
  }
  resetOkDataForm() {
    this.form2.reset(this.userForm2);
  }
  resetNokDataForm() {
    this.form2.controls.nameForm2.setValue('');
    this.form2.controls.pass1Form2.setValue('');
    this.form2.controls.pass2Form2.setValue('');
  }
  isEimard(control: FormControl): { [k: string]: boolean } {
    // tslint:disable-next-line:curly
    if (control.value !== 'Eimard') return {noEimard: true};
    return null;
  }

  // * Validación síncrona *
  equalPasswordForm2(): { [k: string]: boolean } {
    // let form2 = this;

    if (this.form2.get('pass1Form2').value !== this.form2.get('pass2Form2').value) {
       return {noequal : true};
    }
    return null;
  }
  // * Validación síncrona *
  availableSurname(control: FormControl): Promise<{[k: string]: boolean}> {
    return new Promise( (resolve, reject) => {
      setTimeout( () => {
        // tslint:disable-next-line:curly
        if (control.value === 'Sobrino') {
          resolve({noDisponibleApellido: true });
          console.log(' ** APELLIDO NO DISPONIBLE !! **');
        // tslint:disable-next-line:curly
        } else {
          console.log(' ** APELLIDO DISPONIBLE !! **');
          resolve();
        }
      }, 5000);
    });
  }

  addSkill() {
    (<FormArray>this.form2.get('skills')).push(new FormControl('', Validators.required));
  }

}

