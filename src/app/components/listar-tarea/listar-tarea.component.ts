import { Component, OnInit } from '@angular/core';
import { Homework } from 'src/app/models/homework';
import { TareaService } from 'src/app/services/tarea.service';

import * as printJS from 'print-js'

@Component({
  selector: 'app-listar-tarea',
  templateUrl: './listar-tarea.component.html',
  styleUrls: ['./listar-tarea.component.css'],
  providers: [TareaService]
})
export class ListarTareaComponent implements OnInit {

    public tareas;
    public tareasList;
    public tareaIDModel: Homework;

  constructor(private _tareaService: TareaService) { 

    this.tareaIDModel = new Homework('','','','','');

  }

  ngOnInit(): void {
    this.getHomeworks();
  }



  getHomeworks(){
    this._tareaService.obtenerTareas().subscribe(
      response=>{
        console.log(response.homeworks);
        this.tareasList = response.homeworks;

      },
      error=>{
        console.log(<any>error)
      }
    )
  }

obtenerTareaId(id){

  this._tareaService.obtenerTarea(id).subscribe(

    response=>{
      this.tareaIDModel = response.TareaEncontrado;
      console.log(response.TareaEncontrado);
    }
  )
  } 

  editarTarea(){
    this._tareaService.editarTarea(this.tareaIDModel).subscribe(

      response=>{
        console.log(response);
        this.getHomeworks();
      }
    )
  }

  eliminarTarea(id){
    this._tareaService.eliminarTarea(id).subscribe(
      response=>{
        console.log(response);
        this.getHomeworks();
      }
    )
  }

}
