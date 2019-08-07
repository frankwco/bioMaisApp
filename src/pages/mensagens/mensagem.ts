import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

/*
  Generated class for the QuestaoMultiplaEscolha page.


  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.

@Component({
    selector: 'page-questao-multipla-escolha',
    templateUrl: 'questao-multipla-escolha.html'
  })
*/

export class MensagemPage {
    private home;
    private questao;
    private alternativaSelecionada;
    private tentativas=0;
    private totalPontos;

    constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private toastCtrl: ToastController, public loadingCtrl: LoadingController) {

    }



    feedback(){
        let alert = this.alertCtrl.create();
        alert.setTitle('Você tem mais uma chance!!');
        //alert.setTitle('');

        alert.setMessage(this.questao.feedBackTexto);
        alert.addButton('Tentar Novamente');
        /* alert.addButton({
           text: 'Ok',
           handler: data => {
             console.log('Radio data:', data);

           }
         });*/
        alert.present().then(() => {
            //  this.testRadioOpen = true;
        });

    }

presentLoadingCustomErro() {

  let loading = this.loadingCtrl.create({
    spinner: 'hide',
    content: `
      <div >
        <img src="assets/imagens/incorreto.png"/>
      </div>`,
    duration: 700
  });

  loading.onDidDismiss(() => {
    this.feedback();
    console.log('Dismissed loading');
  });

  loading.present();
}

    presentToast(mensagem) {
      let toast = this.toastCtrl.create({
        message: mensagem,
        duration: 2000,
        position: 'middle',
        cssClass: 'alertDanger'
      });
      toast.onDidDismiss(() => {
        //console.log(':-(');
      });
      toast.present();
    }

    //  ionViewDidLoad() {
    //  console.log('ionViewDidLoad QuestaoMultiplaEscolhaPage');
    //  }


}
