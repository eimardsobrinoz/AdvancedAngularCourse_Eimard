import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpClientServiceService {
  urlFootballApi: string = 'http://api.football-data.org/v1/competitions/424/teams';
  constructor(private http: HttpClient) { }

  // ResponseType
  loadDataResponseTypeText() {
    return this.http.get(this.urlFootballApi, {responseType: 'text' });
  }
  loadDataResponseTypeBlob() {
    return this.http.get(this.urlFootballApi, {responseType: 'blob' });
  }
  loadDataResponseTypeArrayBuffer() {
    return this.http.get(this.urlFootballApi, {responseType: 'arraybuffer' });
  }
  loadDataResponseTypeJson() {
    return this.http.get(this.urlFootballApi, {responseType: 'json'});
  }


  // Observe
  loadDataObserveResponse() {
    return this.http.get(this.urlFootballApi, {observe: 'response'} );
  }
  loadDataObserveBody() {
    return this.http.get(this.urlFootballApi, {observe: 'body'} );
  }
  loadDataObserveEvents() {
    return this.http.get(this.urlFootballApi, {observe: 'events'} );
  }



  // Progress Events
  getData() {
    const myCustomRequest =  new HttpRequest('GET', this.urlFootballApi, {reportProgress : true});
    this.http.request(myCustomRequest).subscribe( (event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.Sent:
          console.log('**EVENTO**  Tipo: Envío de solicitud: ', event);
        break;

        case HttpEventType.ResponseHeader:
          console.log('**EVENTO**  Tipo: Respuesta de header: ', event);
        break;

        case HttpEventType.DownloadProgress:
          console.log('**EVENTO**  Tipo: Descarga en progreso: ', event);
          let responseSize = Math.round(event.loaded / 1024);
          console.log(`Tamaño de la respuesta: ${responseSize} Kb`);
        break;

        case HttpEventType.Response:
          console.log('**EVENTO**  Tipo: Respuesta: ', event);
        break;
      }
      console.log('------------------------------------');
    });
  }

}
