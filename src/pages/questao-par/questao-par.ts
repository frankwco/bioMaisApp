import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

import { FeedbackPage } from '../feedback/feedback';

/*
  Generated class for the QuestaoPar page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-questao-par',
    templateUrl: 'questao-par.html'
})
export class QuestaoParPage {




    private precionado1;
    private botaoPrecionado1;
    private precionado2;
    private desabilitaBotao;
    private inTimeOut;
    private questao;
    private home;

    private erros;

    showImage: boolean = false;

    private pares;
    constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private toastCtrl: ToastController, public loadingCtrl: LoadingController) {
        //this.funcao = params.get("funcao");
        //RECEBER O ID DA QUESTÃO QUE SERÁ ABERTA....
        this.home = navParams.get("home");
        this.precionado1 = false;
        this.precionado2 = false;

        this.erros = 0;

        this.questao = navParams.get("questao");



        if (this.questao.modelo == 3) {
            this.showImage = true;
        }


        this.pares = this.questao.pares;

        console.log(this.pares[0].id);

        this.pares = this.embaralharArray(this.pares);

        //this.atribuirParesObjetos();

        this.getPosicaoRadom();
        //#FFD700

        this.precionado1 = undefined;

        this.desabilitaBotao = {};
        this.desabilitaBotao.bt1 = false;
        this.desabilitaBotao.bt2 = false;
        this.desabilitaBotao.bt3 = false;
        this.desabilitaBotao.bt4 = false;
        this.desabilitaBotao.bt5 = false;
        this.desabilitaBotao.bt6 = false;
        this.desabilitaBotao.bt7 = false;
        this.desabilitaBotao.bt8 = false;

        this.inTimeOut = false;

    }



    getdisabled() {
        return true;
    }

    verificar() {
        //linhas temporárias
        this.navCtrl.pop();
        this.home.continuar();
    }

    botaoPrecionadoNovo(item) {
        //console.log("Item: "+item);
        if (this.inTimeOut == false) {
            if (this.precionado1 == undefined) {
                this.precionado1 = {};
                this.precionado1.anterior = item;
                this.precionado1.idPar = item.idPar;
                //this.precionado1.botao = botao;
                //this.trocaCorBotao(botao, 'secondary');
                item.corBorda = "#5cb85c";
            } else {
                //Caso o usuário clique no mesmo botão duas vezes!!
                if (item.id == this.precionado1.anterior.id) {

                    this.precionado1.anterior.corBorda = "#F0E68C"
                    this.precionado1 = undefined;

                    //this.trocaCorBotao(botao, 'light');
                } else {
                    if (this.precionado1.idPar == item.id) {
                        //acertou
                        this.erros = 0;
                        //this.trocaCorBotao(botao, 'secondary');
                        item.corBorda = "#5cb85c";

                        let btPrecionado1 = this.precionado1.botao;
                        //let btBotao = botao;
                        this.inTimeOut = true;
                        let timeoutId = setTimeout(() => {

                            item.desabilitar = true;
                            this.precionado1.anterior.desabilitar = true;

                            item.corBorda = "#F0E68C";
                            this.precionado1.anterior.corBorda = "#F0E68C";

                            this.inTimeOut = false;
                            this.precionado1 = undefined;
                        }, 500);


                    } else {
                        //errou
                        this.erros += 1;

                        item.corBorda = "#d9534f";
                        this.precionado1.anterior.corBorda = "#d9534f";
                        //this.trocaCorBotao(botao, 'danger');

                        let btPrecionado1 = this.precionado1.botao;
                        //let btBotao = botao;
                        this.inTimeOut = true;
                        let timeoutId = setTimeout(() => {

                            item.corBorda = "#F0E68C";
                            this.precionado1.anterior.corBorda = "#F0E68C";
                            this.precionado1 = undefined;
                            this.inTimeOut = false;
                        }, 500);

                    }

                    //Quanto erra uma vez
                    if (this.erros == 1) {
                        //mostrar a mensagem informado que tem apenas um erro....
                        //console.log("Um erro, tem mais uma chance");
                        HomePage.quantidadeQuestoesConsecutivas = -1;
                        this.mostraErroSegundaTentativa();
                        //this.mostraErroPrimeiraTentativa();
                    }

                    //Quando erra pela segunda vezes
                    if (this.erros == 2) {
                        //mostrar o feedback e mandar para a próxima questão....
                        //console.log("errou duas, feedback e próxima questão");
                        //HomePage.quantidadeQuestoesConsecutivas = -1;
                        //this.mostraErroSegundaTentativa();
                    }


                }
            }
        }
    }


    sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    }

    getCor(botaoPrecionado) {
        return "light";
    }

    getPosicaoRadom() {

        //return 'margin-left:'+ Math.floor(Math.random() * 80)+'%';
    }



    embaralharArray(a) {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
        return a;
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
    presentLoadingCustomSucesso() {
        let conteudo = '<h2 color="secondary">' + HomePage.escolheMensagemAleatoriamente() + '</h2>';
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

}
