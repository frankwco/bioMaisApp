import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Amigos } from '../../models/amigos';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  private amigos;
  constructor(public navCtrl: NavController) {
    this.amigos = new Amigos().retornaAmigosTurma(HomePage.usuarioLogado.turma);
  }
}
