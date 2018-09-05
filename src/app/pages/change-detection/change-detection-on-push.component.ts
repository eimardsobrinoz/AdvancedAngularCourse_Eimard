import { Component, OnInit } from '@angular/core';
import {BehaviorSubject,  Subject } from 'rxjs';
import { ChangeDetectionComponent } from './change-detection.component';
import { ChangeDetectionService } from './change-detection.service';

@Component({
  selector: 'app-change-detection-on-push',
  templateUrl: './change-detection-on-push.component.html',
  styles: []
})
export class ChangeDetectionOnPushComponent implements OnInit {
  skills: string[] = ['Angular', 'Html', 'CSS'];
  user: Object = [];
  constructor (private _changeDetectionService: ChangeDetectionService) {
       this._changeDetectionService.$user.subscribe( datos => {
         this.user = datos;
       });
  }

  ngOnInit() {
  }

  addSkillWithOnPush(skill: string) {
    // El método push() realiza una mutación de la referencia a la lista
    this.skills.push(skill);
  }
  addSkillWithNewReference(skill: string) {
    // Si añadimos el elemento a la lista de este modo, se creará
    // una referencia a la ista completamente nuevo y a pesar de usar estrategia
    // OnPush() en el hijo, éste detectará los cambios y funcionará como por defecto. 
    this.skills = [...this.skills, skill];
  }

  setUser(userName: string) {
    this._changeDetectionService.userObject.name = userName;
    this._changeDetectionService.setUser();
  }

  setUserWithNewReference(userName: string) {
    this._changeDetectionService.setUser({
      name: userName,
      surname: 'Sobrino'
    });
  }

  setUser2(userName: string) {
    this._changeDetectionService.userObject2.name = userName;
    this._changeDetectionService.setUser2();
  }

  setUserWithNewReference2(userName: string) {
    this._changeDetectionService.setUser2({
      name: userName,
      surname: 'Sobrino'
    });
  }

}
