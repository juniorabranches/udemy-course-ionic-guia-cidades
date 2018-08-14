import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { AuthProvider } from '../../../providers/auth/auth';

import { FormBuilder, Validators } from "@angular/forms";
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  backgrounds = [
    'assets/imgs/background/background-1.jpg',
    'assets/imgs/background/background-2.jpg',
    'assets/imgs/background/background-3.jpg',
    'assets/imgs/background/background-4.jpg'            
  ]

  public loginForm: any;
  constructor(public auth: AuthProvider, public loading: LoadingController, public formBuilder: FormBuilder, 
    public nav: NavController, public navParams: NavParams) {;    
    this.loginForm = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(20), Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goToSignup(){
    this.nav.push('SignupPage');
  }

  facebookLogin(){
    let loading = this.loading.create({
      content: 'Realizando login com Facebook...'
    });
    loading.present();
    this.auth.facebookLogin().then(response => {
     
        loading.dismiss();
        this.nav.setRoot('HomePage');
     
    }, error => {
      loading.dismiss();
      
    });
  }



}
