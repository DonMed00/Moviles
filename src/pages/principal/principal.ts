import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import {Pagina2Page, Pagina3Page} from '../index.paginas';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';

/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {
  pagina2 : any = Pagina2Page;
  public movilList:Array<any>;
  public loadedMovilList:Array<any>;
  public movilRef:firebase.database.Reference;
  total: any;
  constructor(private afbd: AngularFirestore,
              public navCtrl: NavController,
              public navParams: NavParams,
              private menuCtl: MenuController) {
                  this.movilRef = firebase.database().ref('/catalogo');


                  this.movilRef.on('value', movilList => {
                let moviles = [];
                movilList.forEach( movil => {
                  moviles.push(movil.val());
                  return false;
                });

                this.movilList = moviles;
                this.loadedMovilList = moviles;
              });

                }


                initializeItems(): void {
                  this.movilList = this.loadedMovilList;
                }

                getItems(searchbar) {
                // Reset items back to all of the items
                this.initializeItems();

                // set q to the value of the searchbar
                var q = searchbar.srcElement.value;


                // if the value is an empty string don't filter the items
                if (!q) {
                  return;
                }

                this.movilList = this.movilList.filter((v) => {
                  if(v.marca && q) {
                    if (v.marca.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                      return true;
                    }
                    return false;
                  }
                });

                console.log(q, this.movilList.length);
                this.total = this.movilList.length;

              }

              verInfo(movil: any){
                this.navCtrl.push(
                  Pagina3Page,
                  {'movil' : movil}
                );
              }


  mostrarMenu(){
    console.log("Mostrando menú");
    this.menuCtl.toggle();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

}
