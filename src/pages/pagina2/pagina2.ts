import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {Pagina3Page} from '../index.paginas';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the Pagina2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {
  pagina3: any = Pagina3Page;
  catalogo: Observable<any[]>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private menuCtl: MenuController,
              private afDB: AngularFireDatabase) {
          this.catalogo = afDB.list('catalogo').valueChanges();
  }

  mostrarMenu(){
    console.log("entra");
    this.menuCtl.toggle();
  }

  irPagina3(movil: any){
    this.navCtrl.push(
      Pagina3Page,
      {'movil' : movil}
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina2Page');
  }

}
