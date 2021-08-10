import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Homework } from 'src/app/models/homework';
import { TareaService } from 'src/app/services/tarea.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrls: ['./crear-tarea.component.css'],
  providers: [ TareaService]
})
export class CrearTareaComponent implements OnInit {

  public tareaModel: Homework;

  constructor(
    
    private _tareaService: TareaService ,
    private _router :Router
    
    ) { 

    this.tareaModel = new Homework("","","","","");
  }

  ngOnInit(): void {
  }

  registrarTarea(){
    this._tareaService.guardarTarea(this.tareaModel).subscribe(
      response=>{
        console.log(response);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Tarea Ingresada Correctamente',
          showConfirmButton: false,
          timer: 2300
        })

        this._router.navigate(['/listar-tarea']);
      },
      error=>{
        console.log(<any>error);
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: error.error.mensaje,
          showConfirmButton: false,
          timer: 1500
        })
      }
    )
    }
    
  }


