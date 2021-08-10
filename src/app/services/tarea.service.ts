import { Injectable } from '@angular/core';
import { CONNECTION } from './global';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Homework } from '../models/homework';



@Injectable({
  providedIn: 'root'
})
export class TareaService {
  public ruta: string;
  public url
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(public _http: HttpClient) { 
    this.ruta = CONNECTION.URI;

  }


 guardarTarea(homework: Homework): Observable<any>{
 let params = JSON.stringify(homework);
 return this._http.post(this.ruta + 'saveHomework', params, {headers: this.headersVariable})
}

 obtenerTareas(): Observable<any>{
 return this._http.get(this.ruta + 'getHomeworks', {headers: this.headersVariable})
  
  }

  editarTarea(homework: Homework): Observable<any>{
    let params = JSON.stringify(homework);

    return this._http.put(this.ruta + 'updateHomework/' + homework._id , params, { headers: this.headersVariable })

  }

  obtenerTarea(id:String): Observable<any>{

    return this._http.get(this.ruta + 'GetHomeworkID/' + id, {headers: this.headersVariable})
  }

  eliminarTarea(id:String): Observable<any>{

    return this._http.delete(this.ruta + 'deleteHomework/' + id, { headers: this.headersVariable})

  }

}
