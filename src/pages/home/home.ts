import { Component } from '@angular/core';

import { NavController, ToastController, AlertController, Platform } from 'ionic-angular';
import { QuestaoMultiplaEscolhaPage } from '../questao-multipla-escolha/questao-multipla-escolha';
import { QuestaoParPage } from '../questao-par/questao-par';
import { QuestaoVerdadeiroFalsoPage } from '../questao-verdadeiro-falso/questao-verdadeiro-falso';
import { SucessoPage } from '../sucesso/sucesso';

import { QuestoesMEG1 } from '../../models/questoesMEG1';
import { QuestoesMEG2 } from '../../models/questoesMEG2';
import { QuestoesTPG1 } from '../../models/questoesTPG1';
import { QuestoesTPG2 } from '../../models/questoesTPG2';
import { Amigos } from '../../models/amigos';

import { Storage } from '@ionic/storage';

//import { Storage } from '@ionic/storage';


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    //Cada grupo vai se referir aos diferentes conteúdos do curso, e vai ser chamado ao clicar nas bolinhas
    //private questoesGrupo1;

    private questoesMultiplaEscolhaG1 = [];
    private questoesToqueParesG1 = [];
    private questoesMultiplaEscolhaG2 = [];
    private questoesToqueParesG2 = [];
    private questoesMultiplaEscolha = [];
    private questoesToquePares = [];

    private questoesSelecionadas = [];

    public static acerto = 0;

    private quantidadeQuestaoResolver = 3;
    private quantidadeQuestoesResolvidas = 0;
    private questoesMultiplaGrupoSelecionado = [];
    private questoesParesGrupoSelecionado = [];

    public static quantidadeQuestoesConsecutivas = 0;
    public static quantiadePontosRecompensaQuestoesConsecutivas = 0;
    public static quantidadePontos = 0;
    public static quantidadePontosDia;
    public static usuarioLogado;
    public quantidadeTotalPontos = 0;

    constructor(public navCtrl: NavController, private toastCtrl: ToastController, private storage: Storage, public alertCtrl: AlertController, private platform: Platform) {
        //this.questoesGrupo1 = {id:1, enunciado: "Selecione os Pares", imagem:"teste.png"}


        //this.gravarArquivo();
        this.acessar();
    }

    sair() {
        this.storage.ready().then(() => {

            this.storage.remove('logado');
            this.acessar();
        });
    }

    showLogin() {
        let prompt = this.alertCtrl.create({
            title: 'Login',
            message: "Entre com o nome de usuário e a senha",
            inputs: [
                {
                    name: 'nome',
                    placeholder: 'Nome de Usuário'
                },
                {
                    type: 'password',
                    name: 'senha',
                    placeholder: 'Senha'
                },
            ],

            buttons: [
                {
                    text: 'Cancelar',
                    handler: data => {
                        //console.log('Cancel clicked');
                        this.platform.exitApp();
                    }
                },
                {
                    text: 'Entrar',
                    handler: data => {
                        console.log("Dados: " + data);
                        let logado = new Amigos().validaUsuario(data.nome, data.senha);
                        if (logado != undefined) {
                            HomePage.usuarioLogado = logado;
                            this.storage.ready().then(() => {
                                this.storage.set('logado', logado);
                            });
                        } else {
                            this.showLogin();
                        }
                        //console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();

        prompt.onDidDismiss(() => {
            //console.log("dismi");
            this.platform.exitApp();
        });
    }

    showLoginQuestao(mensagem, grupo) {

        let prompt = this.alertCtrl.create({
            title: 'Login',
            message: mensagem,
            inputs: [
                {
                    type: 'password',
                    name: 'senha',
                    placeholder: 'Senha'
                },
            ],

            buttons: [
                {
                    text: 'Cancelar',
                    handler: data => {
                        //console.log('Cancel clicked');
                        //this.platform.exitApp();
                    }
                },
                {
                    text: 'Entrar',
                    handler: data => {
                        console.log("Dados: " + data.senha);

                        if (grupo == 1 && data.senha == '1') {
                            if (HomePage.usuarioLogado.resolvidog1 == false) {
                                this.iniciarResolucao(grupo);
                            } else {
                                console.log("Entrar com a senha do adm, G1 já resolvida");
                            }

                        }

                        if (grupo == 2 && data.senha == '2') {
                            if (HomePage.usuarioLogado.resolvidog2 == false) {
                                this.iniciarResolucao(grupo);
                            } else {
                                console.log("Entrar com a senha do adm, G1 já resolvida");
                            }

                        }
                        if (data.senha == '123') {
                            this.iniciarResolucao(grupo);
                        } else {
                            console.log("Não confere");
                        }

                    }
                }
            ]
        });
        prompt.present();


    }

    acessar() {
        this.storage.ready().then(() => {
            this.storage.get('logado').then((val) => {
                if (val == null) {
                    this.showLogin();
                    this.storage.set('acessado', "sim");

                } else {
                    HomePage.usuarioLogado = val;
                }
            })
        });

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

    static escolheMensagemAleatoriamente() {

        let list: string[] = ["Parabéns!!", "Correto!!!", "Muito bem!", "Continue assim!!"];
        return list[Math.floor(Math.random() * list.length)];
    }

    chamarQuestao(tipo) {
        console.log(tipo);

        switch (tipo) {
            case 'par':
                this.navCtrl.push(QuestaoParPage);
                break;
            case 'multipla':
                this.navCtrl.push(QuestaoMultiplaEscolhaPage);
                break;
            case 'vf':
                this.navCtrl.push(QuestaoVerdadeiroFalsoPage);
                break;
        }

    }

    testeChamadaImagem() {
        console.log("teste chamada imagem");
    }

    loginQuestoes(grupo) {
        //console.log("Login: " + this.showLoginQuestao("Coloca"));
        if (grupo == 1) {
            if (HomePage.usuarioLogado.resolvidog1 == true) {
                this.showLoginQuestao("Insira a Senha do Administrador do Curso. Grupo " + grupo, grupo);
            } else {
                this.showLoginQuestao("Insira a Senha do Grupo " + grupo, grupo);
            }

        } else if (grupo == 2) {
            if (HomePage.usuarioLogado.resolvidog2 == true) {
                this.showLoginQuestao("Insira a Senha do Administrador do Curso. Grupo " + grupo, grupo);
            } else {
                this.showLoginQuestao("Insira a Senha do Grupo " + grupo, grupo);
            }
        }

    }

    armazenarQuestoes(grupo) {
        let questoesG1 = [];
        let questoesG2 = [];
        let questoesArmazenar = [];
        for (let x = 0; x < this.questoesMultiplaEscolhaG1.length; x++) {
            let qq = { "questao": this.questoesMultiplaEscolhaG1[x], "grupo": 1, "aplicacao": 0 };
            questoesG1.push(qq);
        }
        for (let x = 0; x < this.questoesToqueParesG1.length; x++) {
            let qq = { "questao": this.questoesToqueParesG1[x], "grupo": 1, "aplicacao": 0 };
            questoesG1.push(qq);
        }
        questoesG1 = this.embaralharArray(questoesG1);
        for (let x = 0; x < questoesG1.length; x++) {
            let qq = questoesG1[x];
            if (x < 20) {
                qq.aplicacao = 1;
            } else if (x >= 20 && x < 40) {
                qq.aplicacao = 2;
            } else {
                qq.aplicacao = 3;
            }
            questoesArmazenar.push(qq);
        }

        for (let x = 0; x < this.questoesMultiplaEscolhaG2.length; x++) {
            let qq = { "questao": this.questoesMultiplaEscolhaG2[x], "grupo": 2, "aplicacao": 0 };
            questoesG2.push(qq);
        }
        for (let x = 0; x < this.questoesToqueParesG2.length; x++) {
            let qq = { "questao": this.questoesToqueParesG2[x], "grupo": 2, "aplicacao": 0 };
            questoesG2.push(qq);
        }

        questoesG2 = this.embaralharArray(questoesG2);
        for (let x = 0; x < questoesG2.length; x++) {
            let qq = questoesG2[x];
            if (x < 20) {
                qq.aplicacao = 1;
            } else if (x >= 20 && x < 40) {
                qq.aplicacao = 2;
            } else {
                qq.aplicacao = 3;
            }
            questoesArmazenar.push(qq);
        }

        this.storage.ready().then(() => {

            this.storage.set('questoesResolver', questoesArmazenar);

        });

        let resolucoes = { "grupo1Aplicacao1": false, "grupo1Aplicacao2": false, "grupo1Aplicacao3": false, "grupo2Aplicacao1": false, "grupo2Aplicacao2": false, "grupo2Aplicacao3": false };
        this.storage.ready().then(() => {

            this.storage.set('resolucoes', resolucoes);

        });
        this.iniciarResolucao(grupo);
    }

    buscaQuestoes(aplicacao, grupo) {
        this.storage.ready().then(() => {
            this.storage.get('questoesResolver').then((val) => {
                for (let x = 0; x < val.length; x++) {
                    let qq = val[x];
                    if (qq.grupo == grupo && qq.aplicacao == aplicacao) {
                        this.questoesSelecionadas.push(qq);
                    }
                }
            })
        });
    }


    iniciarResolucao(grupo) {
        this.questoesSelecionadas = [];
        if (grupo == 1) {

            this.storage.ready().then(() => {
                HomePage.usuarioLogado.resolvidog1 = true;
                this.storage.set('logado', HomePage.usuarioLogado);

            });

            this.storage.ready().then(() => {
                this.storage.get('resolucoes').then((val) => {
                    if (val == null) {
                        this.armazenarQuestoes(grupo);
                    } else if (val.grupo1Aplicacao1 == false) {
                        //primeiro é a aplicação segundo é o grupo
                        this.buscaQuestoes(1, 1);
                        val.grupo1Aplicacao1 = true;
                        this.storage.set('resolucoes', val);
                        //recuperar as questões do grupo 1 aplicacao 1 e colocar no this.questoesSelecionadas
                    } else if (val.grupo1Aplicacao2 == false) {
                        this.buscaQuestoes(2, 1);
                        val.grupo1Aplicacao2 = true;
                        this.storage.set('resolucoes', val);

                    } else if (val.grupo1Aplicacao3 == false) {
                        this.buscaQuestoes(3, 1);
                        val.grupo1Aplicacao3 = true;
                        this.storage.set('resolucoes', val);

                    }else{
                        não pode chamar aqui, pois vai continuar ali em baixo....
                        this.armazenarQuestoes(grupo);
                    }

                })
            });
/*
            this.questoesMultiplaEscolhaG1 = this.embaralharArray(new QuestoesMEG1().questoesMultiplaEscolha);
            this.questoesToqueParesG1 = this.embaralharArray(new QuestoesTPG1().questoesToquePares);
            this.quantidadeQuestaoResolver = this.questoesMultiplaEscolhaG1.length + this.questoesToqueParesG1.length;

            for (let x = 0; x < this.questoesMultiplaEscolhaG1.length; x++) {
                let qq = { "questao": this.questoesMultiplaEscolhaG1[x] };
                this.questoesSelecionadas.push(qq);
            }
            for (let x = 0; x < this.questoesToqueParesG1.length; x++) {
                let qq = { "questao": this.questoesToqueParesG1[x] };
                this.questoesSelecionadas.push(qq);
            }
*/

        } else if (grupo == 2) {

            this.storage.ready().then(() => {
                HomePage.usuarioLogado.resolvidog1 = true;
                this.storage.set('logado', HomePage.usuarioLogado);

            });

            this.storage.ready().then(() => {
                this.storage.get('resolucoes').then((val) => {
                    if (val == null) {
                        this.armazenarQuestoes(grupo);
                    } else if (val.grupo2Aplicacao1 == false) {
                        //primeiro é a aplicação segundo é o grupo
                        this.buscaQuestoes(1, 2);
                        val.grupo2Aplicacao1 = true;
                        this.storage.set('resolucoes', val);
                        //recuperar as questões do grupo 1 aplicacao 1 e colocar no this.questoesSelecionadas
                    } else if (val.grupo2Aplicacao2 == false) {
                        this.buscaQuestoes(2, 2);
                        val.grupo2Aplicacao2 = true;
                        this.storage.set('resolucoes', val);

                    } else if (val.grupo2Aplicacao3 == false) {
                        this.buscaQuestoes(3, 2);
                        val.grupo2Aplicacao3 = true;
                        this.storage.set('resolucoes', val);

                    }else{
                        this.armazenarQuestoes(grupo);
                    }

                })
            });
/*
            this.questoesMultiplaEscolhaG2 = this.embaralharArray(new QuestoesMEG2().questoesMultiplaEscolha);
            this.questoesToqueParesG2 = this.embaralharArray(new QuestoesTPG2().questoesToquePares);
            this.quantidadeQuestaoResolver = this.questoesMultiplaEscolhaG2.length + this.questoesToqueParesG2.length;

            for (let x = 0; x < this.questoesMultiplaEscolhaG2.length; x++) {
                let qq = { "questao": this.questoesMultiplaEscolhaG2[x] };
                this.questoesSelecionadas.push(qq);
            }
            for (let x = 0; x < this.questoesToqueParesG2.length; x++) {
                let qq = { "questao": this.questoesToqueParesG2[x] };
                this.questoesSelecionadas.push(qq);
            }
*/
        }

        this.questoesSelecionadas = this.embaralharArray(this.questoesSelecionadas);

        console.log("Quantidade Questoes: " + this.questoesSelecionadas.length);


        HomePage.quantidadeQuestoesConsecutivas = 0;
        HomePage.quantidadePontos = 0;
        HomePage.quantiadePontosRecompensaQuestoesConsecutivas = 0;
        this.quantidadeQuestoesResolvidas = 0;

        HomePage.acerto = 0;
        console.log("Dentro" + grupo);
        //AQUI DÁ PARA ZERAR O UTILIZADA NA QUESTÃO....
        //ESCOLHER AS QUESTÕES PELO GRUPO....
        /*
        if (grupo == 1) {
            this.quantidadeQuestoesResolvidas = 0;
            this.questoesMultiplaGrupoSelecionado = this.retornaQuestoesGrupoSelecionado(grupo, "multipla");
            this.questoesParesGrupoSelecionado = this.retornaQuestoesGrupoSelecionado(grupo, "pares");
            //COMENTEI PARA TESTAR
            //this.continuar();
        } else {
            this.navCtrl.push(QuestaoParPage);
        }*/
        this.continuar();
    }

    public continuar() {
        let questaoSelecionada = this.retornaQuestaoAleatoriamente();

        if (questaoSelecionada != undefined) {
            //verificar
            if (HomePage.acerto == 1) {
                HomePage.quantidadePontos += 10;
            }
            HomePage.acerto = 0;

            if (questaoSelecionada.modelo == 1 || questaoSelecionada.modelo == 3) {
                this.navCtrl.push(QuestaoParPage, { 'home': this, 'questao': questaoSelecionada });

            } else if (questaoSelecionada.modelo == 2 || questaoSelecionada.modelo == 4 || questaoSelecionada.modelo == 5 || questaoSelecionada.modelo == 6) {
                this.navCtrl.push(QuestaoMultiplaEscolhaPage, { 'home': this, 'questao': questaoSelecionada });

            }

            this.quantidadeTotalPontos += HomePage.quantidadePontos + HomePage.quantiadePontosRecompensaQuestoesConsecutivas;

            console.log("Fimmmmmm!!!!" + HomePage.quantidadePontos);

        } else {
            console.log("terminou as questões, finalizar");
            this.navCtrl.push(SucessoPage);
        }
    }

    retornaQuestaoAleatoriamente() {
        let questaoRetorno = undefined;

        if (this.quantidadeQuestoesResolvidas < this.questoesSelecionadas.length) {
            questaoRetorno = this.questoesSelecionadas[this.quantidadeQuestoesResolvidas].questao;
            this.quantidadeQuestoesResolvidas++;
        }

        return questaoRetorno;
    }

    /**O tipo indica se é multipla ou pares e o grupo é 1 ou 2 ou 3 ...**/
    retornaQuestoesGrupoSelecionado(grupo, tipo) {
        //let qqq=this.questoesMultiplaEscolha[1];
        //console.log("Enunciado do Primeiro: "+ qqq.enunciado);
        let listaRetorno = [];
        if (tipo == 'multipla') {
            for (let x = 0; x < this.questoesMultiplaEscolha.length; x++) {
                let questao = this.questoesMultiplaEscolha[x];
                if (questao.grupo = grupo) {
                    listaRetorno.push(questao);
                }
            }
        } else if (tipo == 'pares') {
            for (let x = 0; x < this.questoesToquePares.length; x++) {
                let questao = this.questoesToquePares[x];
                if (questao.grupo = grupo) {
                    listaRetorno.push(questao);
                }
            }
        }
        return listaRetorno;
    }

    escolheModeloAleatoriamente() {
        //let list: number[] = [1, 2, 3, 4, 5, 6];
        //MUDEI PARA RETORNAR SOMENTE MULTIPLA ESCOLHA
        let list: number[] = [1, 2];
        return list[Math.floor(Math.random() * list.length)];
    }

    embaralharArray(a) {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
        return a;
    }

}
