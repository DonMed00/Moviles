import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {Pagina2Page} from '../index.paginas';
import { ListaProvider } from '../../providers/lista/lista';

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
  titulo: string;
  add: string[] = [];
  message: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
             private listaD: ListaProvider,
             public toastCtlr: ToastController) {
                console.log(navParams);
    this.movil = this.navParams.get("movil");
    this.add[0] = "Añadir de la lista";
  }

regresar(){
  this.navCtrl.pop();
}
addToList(movil : any, i: number){
let bool: boolean = false;
  if (this.toogleIcon(i)){
      this.listaD.addToList(movil);
      this.message = "Se ha añadido " + movil.marca + movil.modelo + " a la lista";

  }else{
    this.listaD.removeItem(movil);
    this.message = "Se ha eliminado de la lista";
  }

  let toast = this.toastCtlr.create({
    message: this.message,
    duration: 1500
  })
  toast.present();

}

toogleIcon(i: number){
  let bool: boolean = true;
  if (this.add[0] == "Eliminar a la lista"){
    this.add[0] = "Añadir de la lista";
    bool = false;
  }else{
    this.add[0] = "Eliminar a la lista";
  }
  return bool;
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina3Page');
  }

}
