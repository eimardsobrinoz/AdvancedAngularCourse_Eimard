import { Injectable } from '@angular/core';
import { Subject ,  Observable } from 'rxjs';

@Injectable()
export class AccessibilityService {
  public accesibleModal: Subject<string> = new Subject<string>();
  private $accesibleModal: Observable<string> = this.accesibleModal.asObservable();


  constructor() { }

  lauchModal() {
    this.accesibleModal.next('open');
  }
  destroyModal() {
    this.accesibleModal.next('close');
  }

}
