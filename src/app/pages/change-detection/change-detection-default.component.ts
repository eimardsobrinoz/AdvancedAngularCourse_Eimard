import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection-default',
  templateUrl: './change-detection-default.component.html',
  styles: []
})
export class ChangeDetectionDefaultComponent implements OnInit {
  skills: string[] = ['Angular', 'Html', 'CSS'];
  constructor() {

  }

  ngOnInit() {
  }

  addSkill(skill: string) {
    this.skills.push(skill);
  }

}
