
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
export class QuestoesMEG1 {
    public questoesMultiplaEscolha;

    constructor() {
        this.questoesMultiplaEscolha = [
            {
                id: 41,
                escolhida: "não",
                enunciado: "Em relação às funções gerais do sistema digestório, toque nas alternativas corretas:",
                grupo: 1,
                modelo: 2,
                imagem: '',
                feedBackImagem: "assets/imagens/feedback/feedback41.png",
                feedBackTexto: "",
                alternativaCorreta: [1, 2, 3, 4],
                alternativa1: "Ingestão e trituração do alimento e liberação de substâncias no trato gastrointestinal",
                alternativa2: "Digestão química e mecânica",
                alternativa3: "Absorção de nutrientes, água e sais minerais",
                alternativa4: "Eliminação de restos não aproveitados",
                alternativa5: "Realização de hematose",
                alternativa6: "Produção de anticorpos"
            },
            {
                id: 42,
                escolhida: "não",
                enunciado: "Identifique os dentes que compõem a dentição humana e toque nas alternativas corretas:",
                grupo: 1,
                modelo: 2,
                imagem: '',
                feedBackImagem: "assets/imagens/feedback/feedback42.png",
                feedBackTexto: "",
                alternativaCorreta: [1, 2, 3, 4],
                alternativa1: "Incisivo",
                alternativa2: "Canino",
                alternativa3: "Pré-molar",
                alternativa4: "Molar",
                alternativa5: "Decisivo",
                alternativa6: "Pré-canino"
            },
            {
                id: 43,
                escolhida: "não",
                enunciado: "Em relação ao nome das glândulas salivares maiores, toque nas alternativas corretas:",
                grupo: 1,
                modelo: 2,
                imagem: '',
                feedBackImagem: "assets/imagens/feedback/feedback43.png",
                feedBackTexto: "",
                alternativaCorreta: [1, 2, 3],
                alternativa1: "Parótida",
                alternativa2: "Submandibular",
                alternativa3: "Sublingual",
                alternativa4: "Subtraqueal",
                alternativa5: "Ptialina",
                alternativa6: "Epimandibular"
            },
            {
                id: 44,
                escolhida: "não",
                enunciado: "Dentre as funções da saliva, toque nas alternativas corretas:",
                grupo: 1,
                modelo: 2,
                imagem: '',
                feedBackImagem: "assets/imagens/feedback/feedback44.png",
                feedBackTexto: "",
                alternativaCorreta: [1, 2, 3, 4],
                alternativa1: "Umedecer a cavidade oral e facilitar a deglutição",
                alternativa2: "Iniciar a digestão por meio da ptialina",
                alternativa3: "Umedecer alimentos secos",
                alternativa4: "Auxilia na neutralização de substâncias ácidas",
                alternativa5: "Iniciar a digestão por meio do suco entérico",
                alternativa6: "Produzir hormônios para a digestão no estômago"
            },
            {
                id: 45,
                escolhida: "não",
                enunciado: "Em relação aos sucos digestivos produzidos no sistema digestório, toque nas alternativas corretas:",
                grupo: 1,
                modelo: 2,
                imagem: '',
                feedBackImagem: "assets/imagens/feedback/feedback45.png",
                feedBackTexto: "",
                alternativaCorreta: [1, 2, 3, 4],
                alternativa1: "Saliva",
                alternativa2: "Suco gástrico",
                alternativa3: "Suco pancreático",
                alternativa4: "Suco entérico",
                alternativa5: "Suco hematopoiético",
                alternativa6: "Suor"
            }, {
                id: 51,
                escolhida: "não",
                enunciado: "Que fatores estão ocorrendo, de acordo com o gif, respectivamente? Assinale UMA alternativa",
                grupo: 1,
                modelo: 4,
                imagem: 'assets/imagens/questoes/gif51m4sd.gif',
                feedBackImagem: "assets/imagens/feedback/feedback51.png",
                feedBackTexto: "",
                alternativaCorreta: [2],
                alternativa1: "Abertura do esfíncter pilórico, abertura da cárdia, digestão no estômago e no duodeno",
                alternativa2: "Abertura da cárdia, peristaltismo do estômago, secreção de suco gástrico, digestão e abertura do esfíncter pilórico",
                alternativa3: "Digestão, liberação de suco entérico, peristaltismo no estômago, secreção de bile e abertura da cárdia",
                alternativa4: "Digestão, formação de fezes, movimentos peristálticos no esôfago e eliminação de bolo fecal"

            }, {
                id: 52,
                escolhida: "não",
                enunciado: "Que fator está ocorrendo, de acordo com o gif? Assinale UMA alternativa",
                grupo: 1,
                modelo: 4,
                imagem: 'assets/imagens/questoes/gif52m4sd.gif',
                feedBackImagem: "assets/imagens/feedback/feedback52.png",
                feedBackTexto: "",
                alternativaCorreta: [3],
                alternativa1: "Produção de bile",
                alternativa2: "Digestão por suco gástrico",
                alternativa3: "Peristaltismo do esôfago",
                alternativa4: "Peristaltismo do estômago"

            }, {
                id: 53,
                escolhida: "não",
                enunciado: "Que fatores que estão ocorrendo, de acordo com o gif? Assinale UMA alternativa",
                grupo: 1,
                modelo: 4,
                imagem: 'assets/imagens/questoes/gif53m4sd.gif',
                feedBackImagem: "assets/imagens/feedback/feedback53.png",
                feedBackTexto: "",
                alternativaCorreta: [3],
                alternativa1: "Secreção de suco gástrico e digestão no estômago",
                alternativa2: "Secreção de ptialilna, suco entérico e suco pancreático e digestão no intestino grosso",
                alternativa3: "Secreção de bile, suco pancreático e suco entérico e digestão no intestino delgado",
                alternativa4: "Secreção de bile, suco pancreático e digestão no estômago"

            }, {
                id: 54,
                escolhida: "não",
                enunciado: "De acordo com o gif, assinale a função exercida pela epiglote. Assinale UMA alternativa",
                grupo: 1,
                modelo: 4,
                imagem: 'assets/imagens/questoes/gif54m4sd.gif',
                feedBackImagem: "assets/imagens/feedback/feedback54.png",
                feedBackTexto: "",
                alternativaCorreta: [4],
                alternativa1: "Fechamento da glote, evitando entrada de ar no esôfago",
                alternativa2: "Fechamento do esôfago, proporcionando a passagem do alimento no sistema respiratório",
                alternativa3: "Fechamento da glote, proporcionando a passagem de bolo alimentar pela traquéia",
                alternativa4: "Fechamento da glote, evitando a entrada do bolo alimentar no sistema respiratório"

            }, {
                id: 55,
                escolhida: "não",
                enunciado: "De acordo com o gif, que substância pode ser o líquido em que a rosquinha emerge? Assinale UMA alternativa",
                grupo: 1,
                modelo: 4,
                imagem: 'assets/imagens/questoes/gif55m4sd.gif',
                feedBackImagem: "assets/imagens/feedback/feedback55.png",
                feedBackTexto: "",
                alternativaCorreta: [1],
                alternativa1: "Suco gástrico",
                alternativa2: "Suco entérico",
                alternativa3: "Suco pancreático",
                alternativa4: "Suco salivar"

            }, {
                id: 61,
                escolhida: "não",
                enunciado: "Assinale a única alternativa correta em relação à substância armazenada na estrutura I",
                grupo: 1,
                modelo: 5,
                imagem: 'assets/imagens/questoes/img61m5sd.png',
                feedBackImagem: "assets/imagens/feedback/feedback61.png",
                feedBackTexto: "",
                alternativaCorreta: [1],
                alternativa1: "Substância armazenada na vesícula biliar, secretada no duodeno e emulsifica lipídios",
                alternativa2: "Substância armazenada na vesícula biliar, secretada no pâncreas e produz toxinas",
                alternativa3: "Substância armazenada no fígado, secretada no duodeno e digere carboidratos",
                alternativa4: "Substância armazenada no estômago, secretada no fígado e emulsifica lipídios"

            }, {
                id: 62,
                escolhida: "não",
                enunciado: "Assinale a única alternativa que corresponda corretamente à estrutura I",
                grupo: 1,
                modelo: 5,
                imagem: 'assets/imagens/questoes/img62m5sd.png',
                feedBackImagem: "assets/imagens/feedback/feedback62.png",
                feedBackTexto: "",
                alternativaCorreta: [3],
                alternativa1: "Esta estrutura produz os hormônios FSH, estrógeno e progestina",
                alternativa2: "A secreção de bile é realizada por meio desta estrutura",
                alternativa3: "Pacientes com problemas de metabolismo da glicose podem apresentar disfunção de secreção endócrina desta estrutura",
                alternativa4: "Pacientes com disfunção desta estrutura geralmente apresentam icterícia e hepatite"

            }, {
                id: 63,
                escolhida: "não",
                enunciado: "Assinale a única alternativa que corresponda corretamente à estrutura da imagem",
                grupo: 1,
                modelo: 5,
                imagem: 'assets/imagens/questoes/img63m5sd.png',
                feedBackImagem: "assets/imagens/feedback/feedback63.png",
                feedBackTexto: "",
                alternativaCorreta: [2],
                alternativa1: "Produz as substâncias digestivas: maltase, sacarase e ptialina",
                alternativa2: "Produz as substâncias digestivas: pepsina, renina e ácido clorídrico",
                alternativa3: "Produz as substâncias digestivas: ácido clorídrico, lipase e ptialina",
                alternativa4: "Produz as substâncias digestivas: amilase, protease e pepsina"

            }, {
                id: 64,
                escolhida: "não",
                enunciado: "Assinale a única alternativa que corresponda corretamente à estrutura da imagem",
                grupo: 1,
                modelo: 5,
                imagem: 'assets/imagens/questoes/img64m5sd.png',
                feedBackImagem: "assets/imagens/feedback/feedback64.png",
                feedBackTexto: "",
                alternativaCorreta: [4],
                alternativa1: "Produz as substâncias digestivas: maltase, sacarase e lactase",
                alternativa2: "Produz as substâncias digestivas: suco gástrico e ptialina",
                alternativa3: "Produz as substâncias digestivas: pepsina, renina, sacarase e peptidase",
                alternativa4: "Produz as substâncias digestivas: amilase, lipase, protease e nuclease"

            }, {
                id: 65,
                escolhida: "não",
                enunciado: "Assinale a única alternativa que corresponda corretamente à estrutura da imagem",
                grupo: 1,
                modelo: 5,
                imagem: 'assets/imagens/questoes/img65m5sd.png',
                feedBackImagem: "assets/imagens/feedback/feedback65.png",
                feedBackTexto: "",
                alternativaCorreta: [1],
                alternativa1: "Produz as substâncias digestivas: maltase, lactase, sacarase, peptidases e nucleotidases",
                alternativa2: "Produz as substâncias digestivas: amilase pancreática, tripsina e nucleases",
                alternativa3: "Produz as substâncias digestivas: maltase, amilase, renina e ácido clorídrico",
                alternativa4: "Produz as substâncias digestivas: ptialina, pepsina e sacarase"

            }, {
                id: 66,
                escolhida: "não",
                enunciado: "Assinale a única alternativa que corresponda corretamente à estrutura da imagem",
                grupo: 1,
                modelo: 5,
                imagem: 'assets/imagens/questoes/img66m5sd.png',
                feedBackImagem: "assets/imagens/feedback/feedback66.png",
                feedBackTexto: "",
                alternativaCorreta: [3],
                alternativa1: "Ausência de bactérias, produção de muco e defecação",
                alternativa2: "Absorção de proteínas, produção de bile e suco entérico",
                alternativa3: "Absorção de água e sais minerais, produção de muco e presença de bactérias",
                alternativa4: "Armazenamento de fezes, ausência de bactérias e produção de ptialina"

            }, {
                id: 67,
                escolhida: "não",
                enunciado: "Assinale a única alternativa que corresponda corretamente à estrutura da imagem",
                grupo: 1,
                modelo: 5,
                imagem: 'assets/imagens/questoes/img67m5sd.png',
                feedBackImagem: "assets/imagens/feedback/feedback67.png",
                feedBackTexto: "",
                alternativaCorreta: [1],
                alternativa1: "São vilosidades capazes de aumentar a superfície de contato e absorção",
                alternativa2: "São más formações das paredes intestinais",
                alternativa3: "São vilosidades capazes de diminuir a superfície de contato e absorção",
                alternativa4: "São pregas estomacais responsáveis pela liberação amilase salivar"

            }, {
                id: 68,
                escolhida: "não",
                enunciado: "Assinale a única alternativa que corresponda ao pH ideal de cada estrutura, respectivamente",
                grupo: 1,
                modelo: 5,
                imagem: 'assets/imagens/questoes/img68m5sd.png',
                feedBackImagem: "assets/imagens/feedback/feedback68.png",
                feedBackTexto: "",
                alternativaCorreta: [2],
                alternativa1: "Ácido, ácido e neutro",
                alternativa2: "Neutro, ácido e básico",
                alternativa3: "Básico, neutro e ácido",
                alternativa4: "Neutro, básico e ácido"

            }, {
                id: 69,
                escolhida: "não",
                enunciado: "Assinale a única alternativa que corresponda corretamente à estrutura da imagem",
                grupo: 1,
                modelo: 5,
                imagem: 'assets/imagens/questoes/img69m5sd.png',
                feedBackImagem: "assets/imagens/feedback/feedback69.png",
                feedBackTexto: "",
                alternativaCorreta: [3],
                alternativa1: "Produz os hormônios: gastrina, FSH e testosterona",
                alternativa2: "Produz os hormônios: insulina e glucagon",
                alternativa3: "Produz os hormônios: secretina, colecistoquinina e inibidor gástrico",
                alternativa4: "Produz os hormônios: gastrina, colecistoquinina e insulina"

            }, {
                id: 70,
                escolhida: "não",
                enunciado: "Assinale a única alternativa correta em relação às substâncias produzidas e secretadas por esta estrutura",
                grupo: 1,
                modelo: 5,
                imagem: 'assets/imagens/questoes/img70m5sd.png',
                feedBackImagem: "assets/imagens/feedback/feedback70.png",
                feedBackTexto: "",
                alternativaCorreta: [1],
                alternativa1: "A insulina realiza a glicogênese e entrada de glicose nas células. O glucagon realiza a glicogenólise",
                alternativa2: "A insulina realiza a glicogenólise. O FSH realiza a produção de suco pancreático",
                alternativa3: "O glucagon realiza a entrada de glicose nas células. A insulina realiza a produção de glicose",
                alternativa4: "A testosterona realiza a formação de glicose. A insulina realiza a glicogenólise"

            }, {
                id: 91,
                escolhida: "não",
                enunciado: "Assinale a única alternativa que corresponda aos hormônios envolvidos no controle da digestão:",
                grupo: 1,
                modelo: 6,
                imagem: '',
                feedBackImagem: "assets/imagens/feedback/feedback91.png",
                feedBackTexto: "",
                alternativaCorreta: [1],
                alternativa1: "Gastrina, Secretina, Colecistoquinina e Inibidor Gástrico",
                alternativa2: "Gastrina, Secretina, Estrógeno e Progestina",
                alternativa3: "Colecistoquinina, Inibidor Gástrico, FSH e Testosterona",
                alternativa4: "Gastrina, Inibidor Gástrico, Secretina e Estrógeno"

            }, {
                id: 92,
                escolhida: "não",
                enunciado: "Em relação a Gastrina, assinale a única alternativa correta:",
                grupo: 1,
                modelo: 6,
                imagem: '',
                feedBackImagem: "assets/imagens/feedback/feedback92.png",
                feedBackTexto: "",
                alternativaCorreta: [3],
                alternativa1: "É produzida no estômago, estimula a secreção de suco gástrico e a eliminação de fezes",
                alternativa2: "É produzida no intestino grosso, contrai a cárdia e relaxa o esôfago",
                alternativa3: "É produzida no estômago, estimula a secreção de suco gástrico, contrai o esfíncter esofágico inferior e relaxa o esfíncter pilórico",
                alternativa4: "É produzida no pâncreas, estimula a secreção de ptialina e inibe a secreção de bile"

            }, {
                id: 93,
                escolhida: "não",
                enunciado: "Em relação a secretina, assinale a única alternativa correta",
                grupo: 1,
                modelo: 6,
                imagem: '',
                feedBackImagem: "assets/imagens/feedback/feedback93.png",
                feedBackTexto: "",
                alternativaCorreta: [1],
                alternativa1: "É produzida no intestino delgado, inibe a secreção de suco gástrico e estimula a produção de bile e a secreção de suco pancreático e suco entérico",
                alternativa2: "É produzida no esôfago, inibe a produção de suco gástrico e estimula a produção de suco pancreático",
                alternativa3: "É produzida no pâncreas, inibe a secreção de bile e estimula a produção do hormônio FSH",
                alternativa4: "É produzida no intestino grosso, estimula a secreção de suco gástrico e inibe a formação do quimo"

            }, {
                id: 94,
                escolhida: "não",
                enunciado: "Em relação a colecistoquinina, assinale a única alternativa correta:",
                grupo: 1,
                modelo: 6,
                imagem: '',
                feedBackImagem: "assets/imagens/feedback/feedback94.png",
                feedBackTexto: "",
                alternativaCorreta: [2],
                alternativa1: "É produzida no pâncreas, inibe os movimentos peristálticos no estômago e estimula o peristaltismo no esôfago",
                alternativa2: "É produzida no intestino delgado, estimula a secreção de bile e de enzimas do suco pancreático no duodeno",
                alternativa3: "É produzida no fígado, estimula a secreção de ptialina e promove a digestão de lipídeos na boca",
                alternativa4: "É produzida no estômago, secretada pelas glândulas salivares e promove  digestão de amido"

            }, {
                id: 95,
                escolhida: "não",
                enunciado: "Em relação ao inibidor gástrico, assinale a única alternativa correta:",
                grupo: 1,
                modelo: 6,
                imagem: '',
                feedBackImagem: "assets/imagens/feedback/feedback95.png",
                feedBackTexto: "",
                alternativaCorreta: [4],
                alternativa1: "Produzido no estômago, promove contrações intestinais",
                alternativa2: "Produzido no intestino grosso, promove secreção de suco gástrico",
                alternativa3: "Produzido no esôfago, promove a formação de quimo",
                alternativa4: "Produzido no intestino delgado, diminui as contrações estomacais"

            }, {
                id: 99,
                escolhida: "não",
                enunciado: "Qual a diferença entre sístole e diástole?",
                grupo: 1,
                modelo: 6,
                imagem: '',
                feedBackImagem: "assets/imagens/feedback/feedback99.png",
                feedBackTexto: "",
                alternativaCorreta: [2],
                alternativa1: "Sístole: relaxamento de uma câmara cardíaca. Diástole: contração de uma câmara cardíaca",
                alternativa2: "Sístole: contração de uma câmara cardíaca. Diástole: relaxamento de uma câmara cardíaca",
                alternativa3: "Sístole: abertura das valvas atrioventriculares. Diástole: fechamento das valvas atrioventriculares",
                alternativa4: "Sístole: abertura das valvas semilunares. Diástole: fechamento das valvas semilunares"

            }, {
                id: 100,
                escolhida: "não",
                enunciado: "Qual é a cavidade com parede mais espessa do coração e qual o motivo desta característica?",
                grupo: 1,
                modelo: 6,
                imagem: '',
                feedBackImagem: "assets/imagens/feedback/feedback100.png",
                feedBackTexto: "",
                alternativaCorreta: [4],
                alternativa1: "Ventrículo direito, pois precisa realizar contrações mais fortes para levar sangue aos pulmões",
                alternativa2: "Átrio direito, pois precisa realizar contrações mais fortes para levar sangue ao ventrículo direito",
                alternativa3: "Átrio esquerdo, pois precisa realizar contrações mais fortes para levar sangue ao ventrículo esquerdo",
                alternativa4: "Ventrículo esquerdo, pois precisa realizar contrações mais fortes para distribuir o sangue para os tecidos do corpo"

            }];

    }
}
