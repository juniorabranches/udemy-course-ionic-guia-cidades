import { Component } from '@angular/core';
import { Platform, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
import { resolveDefinition } from '../../node_modules/@angular/core/src/view/util';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'LoginPage';
  fireAuth: any;

  constructor(public af: AngularFireAuth, public loadingCtrl: LoadingController, public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      this.fireAuth = firebase.auth();
      this.initializeApp();
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  initializeApp(){
    this.platform.ready().then(() => {
      this.getInitialPageLoad().then((page) => {
        this.rootPage = page;
      })
    })

  }

  getInitialPageLoad(){
    let loading = this.loadingCtrl.create({
      content: 'Buscando Login...'
    });
    loading.present();

    return new Promise((resolve, reject) => {
      this.af.authState.take(1).subscribe(data => {
        if(data && data.email && data.uid){
          loading.dismiss();
          resolve('TabsPage')
        } else {
          loading.dismiss();
          resolve('LoginPage')
        }
      })
    })
  }
}


