import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, MenuController } from 'ionic-angular';
import { Pagina3Page } from '../index.paginas';
import { ListaProvider } from '../../providers/lista/lista';

/**
 * Generated class for the ListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {
  lista: any = [];
  nada:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
            private listaD: ListaProvider,public toastCtlr: ToastController,
            private menuCtl: MenuController) {
    this.lista = listaD.getList();
    if (this.lista.length == 0){
      this.nada = "Todavía no ha añadido nada a la lista";
    }
  }

  verDatos(movil : any){
    this.navCtrl.push(
      Pagina3Page,
      {'movil' : movil}
    );
  }
  mostrarMenu(){
    console.log("Mostrando menú");
    this.menuCtl.toggle();
  }
  eliminar(movil : any){
      this.listaD.removeItem(movil);
      let toast = this.toastCtlr.create({
        message: "Se ha eliminado " + movil.marca + movil.modelo + " de la lista",
        duration: 1500
      })
      toast.present();
  }

  }
