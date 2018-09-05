import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { ChangeDetectionService } from '../change-detection.service';

@Component({
  selector: 'app-change-detection-hijo-on-push',
  templateUrl: './change-detection-hijo-on-push.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionHijoOnPushComponent {
  @Input() skills: string[];
  @Input() user: Object;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() addSkillWithOnPush: EventEmitter<string> = new EventEmitter<string>();
  @Output() addSkillWithNewReference: EventEmitter<string> = new EventEmitter<string>();

  // user: Object;
  activatedOnPush: boolean = true;

  constructor(private cd: ChangeDetectorRef, private _changeDetectionService: ChangeDetectionService) {
        // this._changeDetectionService.$user.subscribe( datos => {
        //   this.user = datos;
        // });
  }

  detectChanges() {
    this.cd.detectChanges();
  }
  detectChangesObservable() {
    this.cd.markForCheck();
  }


  detachStrategy() {
    this.activatedOnPush = false;
    this.cd.detectChanges();
    this.cd.detach();
  }
  reattachStrategy() {
    this.activatedOnPush = true;
    this.cd.reattach();
  }

}
