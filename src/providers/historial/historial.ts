import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ScanData } from '../../models/scan-data.model';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/*
  Generated class for the HistorialProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HistorialProvider {

  private historial: ScanData[] = [];

  constructor(private iab: InAppBrowser) {
  }

  cargarHistorial(){
    return this.historial;
  }

  agregarHistorial(texto: string){
    let data = new ScanData(texto);

    this.historial.unshift(data);
    console.log(this.historial);

    this.abrirScan(0);
  }

  abrirScan(index: number){
    let scanData = this.historial[index];
    console.log(scanData);

    switch( scanData.tipo ){
      case "http":
        this.iab.create(scanData.info, "_system");
        break;
      default:
      console.log("Tipo no soportado");
      break;
    }
  }


}
