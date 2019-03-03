import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ListaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListaProvider {

  lista: any = [];

  constructor() {

  }

  addToList(movil : any){
    this.lista.push(movil);
  }

  getList(){
    return this.lista;
  }

  removeItem(movil : any){

    let num:number = this.lista.indexOf(movil);
    this.lista.splice(num, 1);
  }

}
