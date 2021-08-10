import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  title:string = 'Componente hijo';
  nombre:string = 'Jose';
  apellido:string = 'Gonzales';
  carrera:string = 'Informática';

  @Input() nombrePadre:string;
  @Input() apellidoPadre:string;
  @Input() edad:number;

  @Output() enviarDatos = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  enviarDatosEvento(){
    this.enviarDatos.emit({
      'nombre': this.nombre,
      'apellido': this.apellido,
      'carrera': this.carrera
    })
  }

}
