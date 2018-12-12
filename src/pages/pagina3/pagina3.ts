import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Pagina4Page} from '../index.paginas';

/**
 * Generated class for the Pagina3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina3',
  templateUrl: 'pagina3.html',
})
export class Pagina3Page {
  movil: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams);

    this.movil = this.navParams.get("movil");
  }
  navegarPagina(movil: any){
    if(this.movil.cantidad>0){

      this.navCtrl.push(
        Pagina4Page,
        {'movil' : movil}
      );
      console.log('Se reduce el stock por posible compra');
      this.movil.cantidad-=1;
  }else{
    var correo = prompt("No quedan existencias,para ser informado\nIntroduce e-mail aquí", "");
    if (correo != null){
      if(correo.match("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$")){
        alert("Te informaremos cuando\n haya nuevas existencias a\n" + correo);
      }else{
        alert("Correo no válido");
      }
    }else {
      alert("No has ingresado un correo");
    }
  }
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina3Page');
  }

}
