import { Component, OnInit } from '@angular/core';
import { HttpClientServiceService } from './http-client-service.service';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styles: [`
    .btn{
      display: block;
      border: 1px solid black;
      margin-bottom: 5px;
      background: #c30e2e;
      color: white;
    }
  `]
})
export class HttpClientComponent implements OnInit {
  dataResponseType: any;
  dataObserve: any;
  constructor(private _myHttpClientService: HttpClientServiceService) { }

  ngOnInit() {
  }

  // ResponseType
  loadDataResponseTypeText() {
    this._myHttpClientService.loadDataResponseTypeText().subscribe( data => {
      console.log('Teams: ', data);
      this.dataResponseType = data;
    });
  }
  loadDataResponseTypeArrayBuffer() {
    this._myHttpClientService.loadDataResponseTypeArrayBuffer().subscribe( data => {
      console.log('Teams: ', data);
      this.dataResponseType = data;
    });
  }
  loadDataResponseTypeBlob() {
    this._myHttpClientService.loadDataResponseTypeBlob().subscribe( data => {
      console.log('Teams: ', data);
      this.dataResponseType = data;
    });
  }
  loadDataResponseTypeJson() {
    this._myHttpClientService.loadDataResponseTypeJson().subscribe( data => {
      console.log('Teams: ', data);
      this.dataResponseType = data;
    });
  }

  // Observe
  loadDataObserveResponse() {
    this._myHttpClientService.loadDataObserveResponse().subscribe( data => {
      console.log('Teams: ', data);
      this.dataObserve = data;
    });
  }
  loadDataObserveBody() {
    this._myHttpClientService.loadDataObserveBody().subscribe( data => {
      console.log('Teams: ', data);
      this.dataObserve = data;
    });
  }
  loadDataObserveEvents() {
    this._myHttpClientService.loadDataObserveEvents().subscribe( data => {
      console.log('Teams: ', data);
      this.dataObserve = data;
    });
  }

  // Progress Events
  loadData() {
    this._myHttpClientService.getData();
  }


}
