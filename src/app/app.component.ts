import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// import { HomePage } from '../pages/home/home';
import { HomeChoicePage } from '../pages/home-choice/home-choice';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomeChoicePage;
  users: FirebaseListObservable<any[]>;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, db: AngularFireDatabase) {
    this.users = db.list('/users');
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
