import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the QuestaoVerdadeiroFalso page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-questao-verdadeiro-falso',
  templateUrl: 'questao-verdadeiro-falso.html'
})
export class QuestaoVerdadeiroFalsoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestaoVerdadeiroFalsoPage');
  }

}
