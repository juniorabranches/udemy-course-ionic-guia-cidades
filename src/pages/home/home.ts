import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, Searchbar } from 'ionic-angular';

import _ from 'lodash';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('searchbar', {read: ElementRef}) searchbarRef: ElementRef;
  @ViewChild('searchbar') searchbarElement: Searchbar;
  search: boolean = false;
  cidades: Array<{cidade: string, estado: string, imagem: string}>
  todasCidades:any;
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
    this.todasCidades = this.cidades;
  }

  toggleSearch(){
    this.search = this.search ? false : true;
  }

  searchState(cidade:any){
    let val = cidade.target.value;
    if (val && val.trim() != '') {
      this.cidades = _.values(this.todasCidades);
      this.cidades = this.cidades.filter((data) => {
        return (data.cidade.toLocaleLowerCase().indexOf(val.toLocaleLowerCase()) > -1);
      })
    } else {
      this.cidades = this.todasCidades;
    }

  }

}
