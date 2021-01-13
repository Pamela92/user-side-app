import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { AgmCoreModule } from '@agm/core';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import { MessagesPageModule } from './feedback/messages/messages.module';



var firebaseConfig = {
  apiKey: "AIzaSyDxB_DkempfeYitUSydU4rmbKSS8RXglno",
  authDomain: "synergic-app.firebaseapp.com",
  databaseURL: "https://synergic-app.firebaseio.com",
  projectId: "synergic-app",
  storageBucket: "synergic-app.appspot.com",
  messagingSenderId: "65487277177",
  appId: "1:65487277177:web:15e865dbd5be2d3e1918a8",
  measurementId: "G-4316EVE5PJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDug8dO2sLm-xN-feiWEyVj5q7dm7sRgNM',
      libraries: ['places']
    }),
    IonicModule.forRoot(),
    AppRoutingModule,MessagesPageModule],
  providers: [
    StatusBar,
    SplashScreen,
    NativeGeocoder,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
