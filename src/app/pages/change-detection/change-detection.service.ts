import { Injectable } from '@angular/core';
import { Subject ,  BehaviorSubject ,  Observable } from 'rxjs';

@Injectable()
export class ChangeDetectionService {
  public userObject = {
      name: 'Eimard',
      surname: 'Sobrino'
  };
  public userObject2 = {
    name: 'Eimard2',
    surname: 'Sobrino'
};

  private user: Subject<Object> = new BehaviorSubject<Object>(this.userObject);
  public $user: Observable<Object> = this.user.asObservable();

  private user2: Subject<Object> = new BehaviorSubject<Object>(this.userObject2);
  public $user2: Observable<Object> = this.user2.asObservable();

  constructor() { }

  setUser(user?: Object) {
    // tslint:disable-next-line:curly
    if (user) this.user.next(user);
    // tslint:disable-next-line:curly
    else this.user.next(this.userObject);
  }

  setUser2(user?: Object) {
    // tslint:disable-next-line:curly
    if (user) this.user2.next(user);
    // tslint:disable-next-line:curly
    else this.user2.next(this.userObject2);
  }

}
