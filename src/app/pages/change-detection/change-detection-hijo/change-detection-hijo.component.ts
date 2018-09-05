import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-change-detection-hijo',
  templateUrl: './change-detection-hijo.component.html',
  styles: []
})
export class ChangeDetectionHijoComponent implements OnInit {
  @Input() skills: string[];
  constructor() { }

  ngOnInit() {
  }

}
