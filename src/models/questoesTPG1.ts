import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { QuestaoMultiplaEscolhaPage } from '../questao-multipla-escolha/questao-multipla-escolha';
import { QuestaoParPage } from '../questao-par/questao-par';
import { QuestaoVerdadeiroFalsoPage } from '../questao-verdadeiro-falso/questao-verdadeiro-falso';
import { SucessoPage } from '../sucesso/sucesso';


/*
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
*/
export class QuestoesTPG1 {
    public questoesToquePares;
    constructor() {
        this.questoesToquePares = [{
            escolhida: "não",
            id: 1,
            enunciado: "Associe a estrutura com seu respectivo nome:",
            grupo: 1,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img1m1sd.png',
            feedBackImagem: "assets/imagens/feedback/feedback1.png",
            feedBackTexto: "",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Glândula Parótida',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Glândula Sublingual',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Glândula Submandibular',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 2,
            enunciado: "Associe a estrutura com seu respectivo nome:",
            grupo: 1,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img2m1sd.png',
            feedBackImagem: "assets/imagens/feedback/feedback2.png",
            feedBackTexto: "",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Boca',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Faringe',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Esôfago',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 3,
            enunciado: "Associe a estrutura com seu respectivo nome:",
            grupo: 1,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img3m1sd.png',
            feedBackImagem: "assets/imagens/feedback/feedback3.png",
            feedBackTexto: "",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Fígado',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Vesícula biliar',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Pâncreas',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 4,
            enunciado: "Associe a estrutura com seu respectivo nome:",
            grupo: 1,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img4m1sd.png',
            feedBackImagem: "assets/imagens/feedback/feedback4.png",
            feedBackTexto: "",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Estômago',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Intestino Grosso',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Intestino Delgado ',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 5,
            enunciado: "Associe a estrutura com seu respectivo nome:",
            grupo: 1,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img5m1sd.png',
            feedBackImagem: "assets/imagens/feedback/feedback5.png",
            feedBackTexto: "",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Ânus',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Pâncreas',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Estômago',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 6,
            enunciado: "Associe a estrutura com seu respectivo nome:",
            grupo: 1,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img6m1sd.png',
            feedBackImagem: "assets/imagens/feedback/feedback6.png",
            feedBackTexto: "",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Palato Duro',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Palato Mole',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Úvula',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 7,
            enunciado: "Associe a estrutura com seu respectivo nome:",
            grupo: 1,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img7m1sd.png',
            feedBackImagem: "assets/imagens/feedback/feedback7.png",
            feedBackTexto: "",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Língua',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Amígdalas',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Dentes Caninos',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 8,
            enunciado: "Associe a estrutura com seu respectivo nome:",
            grupo: 1,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img8m1sd.png',
            feedBackImagem: "assets/imagens/feedback/feedback8.png",
            feedBackTexto: "",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Dentes Incisivos',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Dentes Molares',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Dentes Pré-Molares',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 9,
            enunciado: "Associe a estrutura com seu respectivo nome:",
            grupo: 1,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img9m1sd.png',
            feedBackImagem: "assets/imagens/feedback/feedback9.png",
            feedBackTexto: "",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Nasofaringe',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Orofaringe',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Hipofaringe',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 10,
            enunciado: "Associe a estrutura com seu respectivo nome:",
            grupo: 1,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img10m1sd.png',
            feedBackImagem: "assets/imagens/feedback/feedback10.png",
            feedBackTexto: "",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Corpo do Esôfago',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Esfíncter Esófágico Superior',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Esfíncter Esofágico Inferior',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 11,
            enunciado: "Associe a estrutura com seu respectivo nome:",
            grupo: 1,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img11m1sd.png',
            feedBackImagem: "assets/imagens/feedback/feedback11.png",
            feedBackTexto: "",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Fundo',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Corpo',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Antro',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 12,
            enunciado: "Associe a estrutura com seu respectivo nome:",
            grupo: 1,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img12m1sd.png',
            feedBackImagem: "assets/imagens/feedback/feedback12.png",
            feedBackTexto: "",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Esfíncter Esofágico Inferior',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Corpo do Estômago',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Esfíncter Pilórico',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 13,
            enunciado: "Associe a estrutura com seu respectivo nome:",
            grupo: 1,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img13m1sd.png',
            feedBackImagem: "assets/imagens/feedback/feedback13.png",
            feedBackTexto: "",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Duodeno',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Jejuno',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Íleo',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 14,
            enunciado: "Associe a estrutura com seu respectivo nome:",
            grupo: 1,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img14m1sd.png',
            feedBackImagem: "assets/imagens/feedback/feedback14.png",
            feedBackTexto: "",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Cólon Ascendente',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Cólon Transverso',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Cólon Descendente',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 15,
            enunciado: "Associe a estrutura com seu respectivo nome:",
            grupo: 1,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img15m1sd.png',
            feedBackImagem: "assets/imagens/feedback/feedback15.png",
            feedBackTexto: "",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Apêndice Vermiforme',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Ceco',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Cólon Sigmóide',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 16,
            enunciado: "Associe a estrutura com seu respectivo nome:",
            grupo: 1,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img16m1sd.png',
            feedBackImagem: "assets/imagens/feedback/feedback16.png",
            feedBackTexto: "",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Reto',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Cólon Transverso',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Cólon Sigmóide',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 17,
            enunciado: "Associe a estrutura com seu respectivo nome:",
            grupo: 1,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img17m1sd.png',
            feedBackImagem: "assets/imagens/feedback/feedback17.png",
            feedBackTexto: "",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Vesícula Biliar',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Ductos Hepáticos',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Ducto Colédoco',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 18,
            enunciado: "Associe a estrutura com seu respectivo nome:",
            grupo: 1,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img18m1sd.png',
            feedBackImagem: "assets/imagens/feedback/feedback18.png",
            feedBackTexto: "",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Pâncreas',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Ductos Pancreáticos',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Duodeno',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 19,
            enunciado: "Associe as regiões da língua com suas respectivas percepções de sabor:",
            grupo: 1,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img19m1sd.png',
            feedBackImagem: "assets/imagens/feedback/feedback19.png",
            feedBackTexto: "",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Doce',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Salgado',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Ácido',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 20,
            enunciado: "Associe a estrutura com sua substância produzida:",
            grupo: 1,
            modelo: 1,
            imagem: 'assets/imagens/questoes/img20m1sd.png',
            feedBackImagem: "assets/imagens/feedback/feedback20.png",
            feedBackTexto: "",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'I',
                    imagem: '',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'II',
                    imagem: '',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'III',
                    imagem: '',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Bile',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Suco Gástrico',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Suco Entérico',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 21,
            enunciado: "Relacione a imagem com a informação mais adequada:",
            grupo: 1,
            modelo: 3,
            imagem: '',
            feedBackImagem: "assets/imagens/feedback/feedback21.png",
            feedBackTexto: "",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img21am3sd.png',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img21bm3sd.png',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img21cm3sd.png',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Produção e secreção de saliva, desembocando na cavidade oral',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Trituração do alimento, início da digestão por amilase salivar e deglutição',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Fechamento da laringe permitindo a passagem do alimento para o esôfago',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 22,
            enunciado: "Relacione a imagem com a informação mais adequada:",
            grupo: 1,
            modelo: 3,
            imagem: '',
            feedBackImagem: "assets/imagens/feedback/feedback22.png",
            feedBackTexto: "",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img22am3sd.png',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img22bm3sd.png',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img22cm3sd.png',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Peristaltismo e secreção de muco permitindo o transporte do alimento até o estômago',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Produção de suco gástrico, digestão química e mecânica dos alimentos e produção de quimo',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Passagem de ar e alimentos, se comunicando com boca, cavidade nasal, esôfago e laringe',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 23,
            enunciado: "Relacione a imagem com a informação mais adequada:",
            grupo: 1,
            modelo: 3,
            imagem: '',
            feedBackImagem: "assets/imagens/feedback/feedback23.png",
            feedBackTexto: "",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img23am3sd.png',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img23bm3sd.png',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img23cm3sd.png',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Eliminação de fezes',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Produção de suco entérico, digestão do quimo e absorção de nutrientes',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Armazenamento de resíduos não aproveitados, absorção de água e sais minerais',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 24,
            enunciado: "Relacione a imagem com a informação mais adequada:",
            grupo: 1,
            modelo: 3,
            imagem: '',
            feedBackImagem: "assets/imagens/feedback/feedback24.png",
            feedBackTexto: "",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img24am3sd.png',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img24bm3sd.png',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img24cm3sd.png',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Regulação do nível de glicose no sangue e produção de bile',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Produção de suco pancreático, insulina e glucagon',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Armazenamento de bile',
                    imagem: '',
                    idPar: 3
                }
            ]
        }, {
            escolhida: "não",
            id: 25,
            enunciado: "Relacione a imagem com a informação mais adequada:",
            grupo: 1,
            modelo: 3,
            imagem: '',
            feedBackImagem: "assets/imagens/feedback/feedback25.png",
            feedBackTexto: "",
            pares: [
                {
                    id: 1,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img25am3sd.png',
                    idPar: 4
                },
                {
                    id: 2,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img25bm3sd.png',
                    idPar: 5
                },
                {
                    id: 3,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: '',
                    imagem: 'assets/imagens/questoes/img25cm3sd.png',
                    idPar: 6
                },
                {
                    id: 4,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Passagem de bolo alimentar',
                    imagem: '',
                    idPar: 1
                },
                {
                    id: 5,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Passagem do quimo',
                    imagem: '',
                    idPar: 2
                },
                {
                    id: 6,
                    corBorda: "#F0E68C",
                    desabilitar: false,
                    descricao: 'Armazenamento de bile',
                    imagem: '',
                    idPar: 3
                }
            ]
        }];

    }

}
