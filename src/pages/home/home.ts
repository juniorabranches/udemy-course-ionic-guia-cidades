import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cidades: Array<{cidade: string, estado: string, imagem: string}>
  constructor(public navCtrl: NavController) {
    this.cidades = [
      {
        cidade: 'Cuiabá',
        estado: 'Mato Grosso',
        imagem: 'assets/imgs/cidades/matoGrosso.jpg'
      },
      {
        cidade: 'Rio de Janeiro',
        estado: 'Rio de Janeiro',
        imagem: 'assets/imgs/cidades/rioDeJaneiro.jpg'
      },
      {
        cidade: 'São Paulo',
        estado: 'São Paulo',
        imagem: 'assets/imgs/cidades/saoPaulo.jpg'
      },
      {
        cidade: 'Goiania',
        estado: 'Goiás',
        imagem: 'assets/imgs/cidades/goias.jpg'
      },                
    ]
  }

}
