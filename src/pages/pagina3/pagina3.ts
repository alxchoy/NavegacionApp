import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// NavController es para navegar entre paginas y NavParams para recibir valores entre paginas

@IonicPage()
@Component({
  selector: 'page-pagina3',
  templateUrl: 'pagina3.html',
})
export class Pagina3Page {

  mutante:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    // el metodo get() recibe como parametro el key que se declaro en la pagina anterior que mando los valores
    this.mutante = this.navParams.get("mutante");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina3Page');
  }

  irAtras() {
    this.navCtrl.pop();
  }

  irRoot() {
    this.navCtrl.popToRoot();
  }

}
