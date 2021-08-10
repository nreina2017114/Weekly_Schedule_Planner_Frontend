import { Component, OnInit, OnChanges, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  title:string = 'Componente padre';
  nombre:string = 'Miguel';
  apellido:string = 'Gonzales';
  edad:number = 45;
  infoHijo;

  constructor() { }

  ngOnInit(): void {
    //inicio
  }


  mostarInfo(){
    console.log(this.nombre)
  }

  obtenerDatos(event){
    this.infoHijo = event;
    console.log(event);
  }
}
