
import { NavController } from 'ionic-angular';
import { HomePage } from '../pages/home/home';


/*
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
*/
export class Amigos {
    private amigos = [];
    //http://ionicframework.com/docs/native/file/
    constructor() {
        this.amigos = [{
            "nome": "José da Silva",
            "usuario": "jose",
            "senha": "123",
            "turma": 1,
            "pontuacao": 0,
            "resolvidog1": false,
            "resolvidog2": false,
            "pontuacaog1": 0,
            "pontuacaog2": 0
        },
        {
            "nome": "Mariana da Silva",
            "usuario": "mariana",
            "senha": "123",
            "turma": 1,
            "pontuacao": 0,
            "resolvidog1": false,
            "resolvidog2": false,
            "pontuacaog1": 0,
            "pontuacaog2": 0
        },
        {
            "nome": "Maria da Silva",
            "usuario": "maria",
            "senha": "123",
            "turma": 1,
            "pontuacao": 0,
            "resolvidog1": false,
            "resolvidog2": false,
            "pontuacaog1": 0,
            "pontuacaog2": 0
        },
        {
            "nome": "Antonia da Silva",
            "usuario": "antonia",
            "senha": "123",
            "turma": 2,
            "pontuacao": 0,
            "resolvidog1": false,
            "resolvidog2": false,
            "pontuacaog1": 0,
            "pontuacaog2": 0
        },
        {
            "nome": "Antonio da Silva",
            "usuario": "antonio",
            "senha": "123",
            "turma": 2,
            "pontuacao": 0,
            "resolvidog1": false,
            "resolvidog2": false,
            "pontuacaog1": 0,
            "pontuacaog2": 0
        }];
    }

    public validaUsuario(usuario, senha) {
        let retorno = undefined;
        let amigo;

        for (let x = 0; x < this.amigos.length; x++) {
            console.log(x);
            amigo = this.amigos[x];
            if (amigo.usuario == usuario && amigo.senha == senha) {
                retorno = this.amigos[x];
            }
        }
        return retorno;
    }

    public retornaAmigoUsuario(usuario) {
        let retorno = undefined;
        for (let x = 0; x < this.amigos.length; x++) {
            let amigo = this.amigos[x];
            if (amigo.usuario == usuario) {
                retorno = this.amigos[x];
            }
        }
        return retorno;
    }

    public retornaAmigosTurma(turma) {
        let retorno = [];
        for (let x = 0; x < this.amigos.length; x++) {
            let amigo = this.amigos[x];
            if (amigo.turma == turma) {
                if (amigo.usuario == HomePage.usuarioLogado.usuario) {
                    this.amigos[x].nome = "Eu"
                }
                retorno.push(this.amigos[x]);
            }
        }
        return retorno;
    }
}
