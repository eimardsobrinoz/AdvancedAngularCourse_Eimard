import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-read-files',
  templateUrl: './read-files.component.html',
  styles: []
})
export class ReadFilesComponent implements OnInit {
  private fileText;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  uploadFile(file) {
    console.log('Fichero seleccionado: ', file);
    let reader =  new FileReader();
    reader.readAsText(file.srcElement.files[0]);
    let me = this;
    reader.onload = function () {
      me.fileText = reader.result;
    };
  }

  openFile(path: any) {
    // let file: File = new File(path, path, null);
    // file.open('w'); // open file with write access
    // file.writeln('Escribiendo en la primera fila');
    // file.close();
    this.readTextFile(path);
  }
  readTextFile(file) {
    // let rawFile = new XMLHttpRequest();
    // rawFile.open('GET', file, false);
    // rawFile.onreadystatechange = function () {
    //     if (rawFile.readyState === 4) {
    //         if (rawFile.status === 200 || rawFile.status === 0) {
    //             let allText = rawFile.responseText;
    //             alert(allText);
    //         }
    //     }
    // };
    // rawFile.send(null);
  }


}
