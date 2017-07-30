import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
// Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HomeChoicePage } from '../pages/home-choice/home-choice';
import { AddItemPage } from '../pages/add-item/add-item';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { DataProvider } from '../providers/data/data';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
// import { DatabaseserviceProvider } from '../providers/databaseservice/databaseservice';

export const firebaseConfig = {
  apiKey: "AIzaSyD2_ZacDQHco8zkQ_tntyajl1ObhYqRFdY",
  authDomain: "workouts-6d0d5.firebaseapp.com",
  databaseURL: "https://workouts-6d0d5.firebaseio.com",
  projectId: "workouts-6d0d5",
  storageBucket: "workouts-6d0d5.appspot.com",
  messagingSenderId: "1033497813785"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HomeChoicePage,
    AddItemPage,
    ItemDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HomeChoicePage,
    AddItemPage,
    ItemDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
