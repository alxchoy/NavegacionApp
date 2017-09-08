import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
// NavController es para navegar entre paginas y NavParams para recibir valores entre paginas

import { Pagina2Page } from '../index.paginas'; // importamos la pagina a la que queremos direccionarnos

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  pagina2:any = Pagina2Page;

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

  navegarPagina() {
    // push es el metodo para navegar otra pagina
    this.navCtrl.push(Pagina2Page);
  }

  toggleMenu() {
    // con toogle mostrar y/o ocultamos el menu
    this.menuCtrl.toggle();
  }

}
