import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UsuarioProvider } from '../providers/usuario/usuario';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { IonicStorageModule } from '@ionic/storage';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';


var firebaseConfig = {
  apiKey: "AIzaSyAgX_U4vG09KIYdMDdvjdo3C976dgU6TMI",
  authDomain: "moviles-c24af.firebaseapp.com",
  databaseURL: "https://moviles-c24af.firebaseio.com",
  projectId: "moviles-c24af",
  storageBucket: "moviles-c24af.appspot.com",
  messagingSenderId: "39832936395"
  };

import { MyApp } from './app.component';
import {
        PrincipalPage,
        Pagina2Page,
        Pagina3Page,
        LoginPage,
        ListaPage

} from '../pages/index.paginas';
import { ListaProvider } from '../providers/lista/lista';
@NgModule({
  declarations: [
    MyApp,
    PrincipalPage,
    Pagina2Page,
    Pagina3Page,
    LoginPage,
    ListaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: 'Volver'
    }),
    AngularFirestoreModule,
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PrincipalPage,
    Pagina2Page,
    Pagina3Page,
    LoginPage,
    ListaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    AngularFirestoreModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioProvider,
    ListaProvider,
    ListaProvider
  ]
})
export class AppModule {}
