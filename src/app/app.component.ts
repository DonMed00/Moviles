import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, NavController, AlertController, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PrincipalPage, Pagina2Page, LoginPage, ListaPage } from '../pages/index.paginas';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { AngularFirestore } from '@angular/fire/firestore';
import { ListaProvider } from '../providers/lista/lista';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') navCtrl: NavController;
  rootPage:any;
  pagina2 = Pagina2Page;
  principal = PrincipalPage;
  lista = ListaPage;
  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private menuCtrl : MenuController,
              public usuarioProvider: UsuarioProvider,
              private alertCtrl : AlertController,
              private loadingCtrl: LoadingController,
              private afbd: AngularFirestore,
              private listaP: ListaProvider) {



    platform.ready().then(() => {
      usuarioProvider.cargarStorage().then( existe => {
        statusBar.styleDefault();
        splashScreen.hide();

        if(existe){
          this.rootPage = PrincipalPage;
        }else{
          this.rootPage = LoginPage;
        }
    });
  })
  }


  abrirPagina( pagina: any){
    this.rootPage = pagina;
    this.menuCtrl.close();
  }
  salir() {
    let loading = this.loadingCtrl.create({
      content : "Cerrando Sesión..",
      spinner: 'crescent',
      duration: 1000
    });
      let alert = this.alertCtrl.create({
          title: 'Salir',
          message: '¿Deseas cerrar sesión?',
          buttons: [
              {
                  text: 'No',
                  handler: () => {
                      console.log('Cancel clicked');
                      this.menuCtrl.close();
                  }
              },
              {
                  text: 'Si',
                  handler: () => {
                    loading.present();
                    this.usuarioProvider.borrarUsuario();
                    this.menuCtrl.close();
                    this.navCtrl.setRoot(LoginPage);

                  }
              }
          ]
      });
      alert.present();
    }
  }
