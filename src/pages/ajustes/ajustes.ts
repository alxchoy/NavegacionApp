import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
// Para crear un modal es necesario importar la clase ModalController e instanciarla en el constructor

import { ModalPage } from '../index.paginas';  

@IonicPage()
@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjustesPage');
  }

  activarPrincipal() {
    // Navega a la vista padre que vendería siendo el root y como este es la página de Tabs, selecciona el tab a mostrar
    this.navCtrl.parent.select(2);
  }

  mostrarModal() {
    // Creamos un modal y le pasamos dos parametros: la pagina que mostrara como modal y los datos que enviara
    let modal = this.modalCtrl.create( ModalPage, {nombre:"Alexander", edad:26} );
    modal.present();
    
    // el metodo onDidDismiss() se ejecuta cuando el moda hizo dismiss() osea que desapareció
    modal.onDidDismiss( params => {
      if (params) {
        console.log(params);
      } else {
        console.log("Se cerró sin parámetros");
      }
    });
  }

}
