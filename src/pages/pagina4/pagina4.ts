import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ToastController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { HistorialProvider } from '../../providers/historial/historial';




/**
 * Generated class for the Pagina4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina4',
  templateUrl: 'pagina4.html',
})
export class Pagina4Page {
  movil: any = {};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private barcodeScanner: BarcodeScanner,
              private toastCtlr: ToastController,
              private platform: Platform,
              private historialService: HistorialProvider) {
                this.movil = this.navParams.get("movil");
  }

  scan() {
    console.log("Realizando escáner");
if (!this.platform.is('cordova')){
  this.mostrarError("Error: Plataforma no soportada");

  return;
}

this.barcodeScanner.scan().then((barcodeData) => {
  console.log("result: ", barcodeData.text);
  console.log("format: ", barcodeData.format);
  console.log("cancelled: ", barcodeData.cancelled);

  if (!barcodeData.cancelled && barcodeData.text != null){
    this.historialService.agregarHistorial(barcodeData.text);
  }

}).catch(error => {
  console.error("Error: ", error);
  this.mostrarError("Error: " + error);
})

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina4Page');
  }

  mostrarError(mensaje: string){
    let toast = this.toastCtlr.create({
      message: mensaje,
      duration: 3000
    })
    toast.present();
  }

}
