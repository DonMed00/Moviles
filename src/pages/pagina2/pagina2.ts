import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {Pagina3Page} from '../index.paginas';
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
  moviles : any[] = [
    {
      marca: "Samsung",
      modelo: "S8",
      fecha: "21 de abril de 2017",
      procesador:"Procesador Snapdragon 835 / Exynos 8895",
      capacidad: "4GB RAM.64GB",
      pantalla:"Pantalla 5.8, 1440 x 2960 pixels",
      color:"Color: Negro, Plata",
      camara: "Cámara: 12 MPx",
      bateria: "Batería: 3000 mAh",
      os: "Android 7.0",
      cantidad: 0,
      precio:"699.00",
      imagen: "assets/imgs/s8.jpg",
      imagen2: "assets/imgs/s8-2.jpg"
    },
    {
      marca: "Sony",
      modelo: "XZ3",
      fecha: "31 de Agosto de 2018",
      procesador:"Snapdragon 845.GPU Adreno 630",
      capacidad: "4GB RAM.64 GB + MicroSD (512GB)",
      pantalla:"Pantalla OLED 6 pulgadas 18:9 QHD+ (2.880 1.440)",
      color:"Color: Negro",
      camara: "Cámara: 19 MPx.",
      bateria: "Batería: 3330 mAh ",
      os: "Android 9.0.",
      cantidad: 10,
      precio:"799.00",
      imagen: "assets/imgs/xz3.jpg",
      imagen2: "assets/imgs/xz3-2.jpg"
    },
    {
      marca: "Xiaomi",
      modelo: "MI6",
      fecha: "28 de abril  de 2018",
      procesador:"Qualcomm Snapdragon 835",
      capacidad: "6GB RAM.64 GB/128GB",
      pantalla:"5,15 pulgadas.1920x1080 IPS",
      color:"Color: Negro, Azul",
      camara: "Cámara: 12 MPx.",
      bateria: "Batería: 3350 mAh ",
      os: "Android 7.1.1 NOUGAT. MIUI 8",
      cantidad: 12,
      precio:"429.99",
      imagen: "assets/imgs/mi6.jpg",
      imagen2: "assets/imgs/mi6-2.jpg"
    },
    {
      marca: "Apple",
      modelo: "Iphone Xs",
      fecha: "19 de octubre de 2018",
      procesador:"Apple A12 Bionic 7nm, 64 bit a 2,5GHz",
      capacidad: "3GB RAM. 64 / 256 / 512GB",
      pantalla:"OLED 5,8 (2.436 x 1.125) ",
      color:"Color: Oro, Gris, Plata",
      camara: "Cámara: 12 MPx.",
      bateria: "Batería: >3000 mAh ",
      os: "IOS 12",
      cantidad: 7,
      precio:"1159.50",
      imagen: "assets/imgs/xs.jpg",
      imagen2: "assets/imgs/xs-2.jpg"
    },

  ];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private menuCtl: MenuController) {
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
