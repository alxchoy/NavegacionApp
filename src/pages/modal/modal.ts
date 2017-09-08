import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
// El ViewController nos ayuda cuando queremos regresar a una pagina anterior desde un modal

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  nombre:string = "";
  edad:number = 0;

  constructor(public navParams: NavParams, public viewCtrl: ViewController) {
    // datos enviados desde la pagina que invoca el modal
    this.nombre = this.navParams.get("nombre");
    this.edad = this.navParams.get("edad");

    console.log(this.nombre, this.edad);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  cerrarConParametros() {
    let data = {
      nombre: "Juan Carlos",
      edad: 18,
      coord: {
        lat: 10,
        lon: -10
      }
    };

    this.viewCtrl.dismiss(data); // cerramos el modal y enviamos data a la página que lo invoco
  }

  cerrarSinParametros() {
    this.viewCtrl.dismiss();
  }

}
