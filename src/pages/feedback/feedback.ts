import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Feedback page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html'
})
export class FeedbackPage {
  private home;
  private imagem;
  private chamada;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.home = navParams.get("home");
    this.imagem = navParams.get("imagem");
    this.chamada = 0;
  }

  ionViewCanLeave() {
    if(this.chamada == 0){
      this.navCtrl.pop();
      this.home.continuar();
    }
  }

  continuar(){
    this.chamada = 1;
    this.navCtrl.pop();
    this.home.continuar();
  }

}
