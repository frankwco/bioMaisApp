import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/*
  Generated class for the Sucesso page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sucesso',
  templateUrl: 'sucesso.html'
})
export class SucessoPage {
  private pontos;
  private quantidadeSequencia;
  private pontosSequencia;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pontos = HomePage.quantidadePontos;
    this.quantidadeSequencia = HomePage.quantidadeQuestoesConsecutivas;
    this.pontosSequencia = HomePage.quantiadePontosRecompensaQuestoesConsecutivas;    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SucessoPage');
  }

}
