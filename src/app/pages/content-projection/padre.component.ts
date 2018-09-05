import { HijoComponent } from './hijo.component';
import { Component, OnInit, AfterContentInit, ContentChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit, AfterContentInit {
  @ContentChildren(HijoComponent) public hijos: QueryList<HijoComponent>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log('%c Elementos hijos (ContentChildren)', 'color: blue', this.hijos);
  }

}
