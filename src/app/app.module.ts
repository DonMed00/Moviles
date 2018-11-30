import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

var firebaseConfig = {
    apiKey: "AIzaSyDHvXzsNuQJY-r9S4Y41TX-xuWE63o3Vco",
    authDomain: "catalogomovil-858dc.firebaseapp.com",
    databaseURL: "https://catalogomovil-858dc.firebaseio.com",
    projectId: "catalogomovil-858dc",
    storageBucket: "catalogomovil-858dc.appspot.com",
    messagingSenderId: "569910277293"
  };

import { MyApp } from './app.component';
import {
        PrincipalPage,
        Pagina2Page,
        Pagina3Page,
        Pagina4Page
} from '../pages/index.paginas';

@NgModule({
  declarations: [
    MyApp,
    PrincipalPage,
    Pagina2Page,
    Pagina3Page,
    Pagina4Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: 'Volver',
      backButtonIcon: 'walk',
    }),
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
    Pagina4Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
