import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

import { FeedbackPage } from '../feedback/feedback';

/*
  Generated class for the QuestaoMultiplaEscolha page.


  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-questao-multipla-escolha',
    templateUrl: 'questao-multipla-escolha.html'
})

export class QuestaoMultiplaEscolhaPage {
    private home;
    private questao;
    private alternativaSelecionada;
    private tentativas = 0;
    private totalPontos;
    private corAlternativa1 = "#F0E68C";
    private corAlternativa2 = "#F0E68C";
    private corAlternativa3 = "#F0E68C";
    private corAlternativa4 = "#F0E68C";
    private corAlternativa5 = "#F0E68C";
    private corAlternativa6 = "#F0E68C";
    private alternativas;

    constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private toastCtrl: ToastController, public loadingCtrl: LoadingController) {
        this.home = navParams.get("home");
        this.questao = navParams.get("questao");
        this.tentativas = 0;
        this.totalPontos = HomePage.quantidadePontos;

        this.alternativas = [{ "alernativa": 1, "corBorda": "#F0E68C", "texto": this.questao.alternativa1 },
        { "alernativa": 2, "corBorda": "#F0E68C", "texto": this.questao.alternativa2 },
        { "alernativa": 3, "corBorda": "#F0E68C", "texto": this.questao.alternativa3 },
        { "alernativa": 4, "corBorda": "#F0E68C", "texto": this.questao.alternativa4 },
        { "alernativa": 5, "corBorda": "#F0E68C", "texto": this.questao.alternativa5 },
        { "alernativa": 6, "corBorda": "#F0E68C", "texto": this.questao.alternativa6 }];
        //console.log("alternativa 6: " + this.questao.alternativa6);
    }



    marcarAlteranativa(alternativa) {
        if (alternativa.corBorda == '#F0E68C') {
            alternativa.corBorda = "#5cb85c";
        } else {
            alternativa.corBorda = "#F0E68C";
        }
    }



    verificar() {
        //linhas temporárias


        if (this.arraysIguais(this.verificarMarcadas(), this.questao.alternativaCorreta)) {
            console.log("Corretooooooo mizeravi");
            HomePage.quantidadeQuestoesConsecutivas++;
            HomePage.acerto++;
            this.presentLoadingCustomSucesso();
        } else {
            console.log("Errouuuu mizeravi");
            if (this.tentativas == 0) {
                HomePage.quantidadeQuestoesConsecutivas = -1;
                this.mostraErroSegundaTentativa();
                //this.mostraErroPrimeiraTentativa();
                //HomePage.quantidadeQuestoesConsecutivas = -1;
                //this.tentativas = 1;

            } else if (this.tentativas == 1) {
                //HomePage.quantidadeQuestoesConsecutivas = -1;
                //this.mostraErroSegundaTentativa();
            }
        }

        /*
                if (this.questao.alternativaCorreta == this.alternativaSelecionada) {
                    HomePage.quantidadeQuestoesConsecutivas++;
                    HomePage.acerto++;
                    this.presentLoadingCustomSucesso();

                } else {
                    if(this.tentativas == 0){
                        //this.presentToast();
                        HomePage.quantidadeQuestoesConsecutivas = -1;
                        this.presentLoadingCustomErro();
                        this.tentativas = 1;

                    }else{
                        console.log("game over");
                        this.presentToast("Game Over");
                        this.navCtrl.pop();
                        //GAME OVER, MANDAR PARA UMA TELA DE ERRO...
                    }

                }
                */
    }

    verificarMarcadas() {
        let marcadas = [];
        if (this.alternativas[0].corBorda == "#5cb85c") {
            marcadas.push(1);
        }
        if (this.alternativas[1].corBorda == "#5cb85c") {
            marcadas.push(2);
        }
        if (this.alternativas[2].corBorda == "#5cb85c") {
            marcadas.push(3);
        }
        if (this.alternativas[3].corBorda == "#5cb85c") {
            marcadas.push(4);
        }
        if (this.alternativas[4].corBorda == "#5cb85c") {
            marcadas.push(5);
        }
        if (this.alternativas[5].corBorda == "#5cb85c") {
            marcadas.push(6);
        }
        return marcadas;
    }


    feedback() {
        this.navCtrl.pop();
        this.navCtrl.push(FeedbackPage, { 'home': this.home, 'imagem': this.questao.feedBackImagem });
        /*
          let alert = this.alertCtrl.create();
          alert.setTitle('Vamos aprender mais!!');

          let msg = "<img src=\"" + this.questao.feedBackImagem + "\"/>"
          alert.setMessage(msg);

          alert.addButton('Continuar');

          alert.present().then(() => {

          });
          alert.onDidDismiss(() => {

              this.navCtrl.pop();

              this.home.continuar();
              console.log('feedback fechouuuu');
          });
    */
    }

    feedbackPrimeiraTentativa() {
        let alert = this.alertCtrl.create();
        alert.setTitle('Ops!!');


        alert.setMessage("Você tem mais uma chance!!");

        alert.addButton('Continuar');

        alert.present().then(() => {
            //  this.testRadioOpen = true;
        });

    }

    mostraErroPrimeiraTentativa() {

        let loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: `
        <div >
          <img src="assets/imagens/incorreto.png"/>
        </div>`,
            duration: 700
        });

        loading.onDidDismiss(() => {
            this.feedbackPrimeiraTentativa();
            console.log('Dismissed loading');
        });

        loading.present();
    }

    mostraErroSegundaTentativa() {

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

        });

        loading.present();
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

    presentLoadingCustomSucesso() {
        let conteudo = '<h2 color="secondary">' + this.escolheMensagemAleatoriamente() + '</h2>';
        let loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: conteudo,
            duration: 800
        });

        loading.onDidDismiss(() => {
            this.navCtrl.pop();
            this.home.continuar();
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

    escolheMensagemAleatoriamente() {
        //let list: number[] = [1, 2, 3, 4, 5, 6];
        //MUDEI PARA RETORNAR SOMENTE MULTIPLA ESCOLHA
        let list: string[] = ["Parabéns!!", "Correto!!!", "Muito bem!", "Continue assim!!"];
        return list[Math.floor(Math.random() * list.length)];
    }

    //  ionViewDidLoad() {
    //  console.log('ionViewDidLoad QuestaoMultiplaEscolhaPage');
    //  }

    arraysIguais(a, b) {
        var i = a.length;
        if (i != b.length) return false;
        while (i--) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    };

}
