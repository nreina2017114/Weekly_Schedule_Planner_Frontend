import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CONNECTION } from '../global';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RestUserService {
  public uri: string;
  public httOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  public token;
  public user;
  private extractData(res: Response){
    let body = res;
    return body || [] || {};
  }


  constructor(private http:HttpClient) { 
    this.uri = CONNECTION.URI;
  }

  test(){
    return 'Mensaje desde el servicio'
  }

  getToken(){
    let token = localStorage.getItem('token');
    if(token != null || token != undefined){
      this.token = token;
    }else{
      this.token = null;
    }
    return this.token;
  }

  getUser(){
    let user = JSON.parse(localStorage.getItem('user'));
    if(user != null || user != undefined){
      this.user = user;
    }else{
      this.user = null;
    }
    return this.user;
  }

  saveUser(user){
    let params = JSON.stringify(user);
    return this.http.post(this.uri + 'saveUser', params, this.httOptions)
    .pipe(map(this.extractData));
  }

  saveUserByAdmin(user, idAdmin){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    })
    let params = JSON.stringify(user);
    return this.http.post(this.uri + 'saveUserOnlyAdmin/'+idAdmin, params, {headers:headers})
      .pipe(map(this.extractData));
  }

  login(user, tokenStatus){
    user.gettoken = tokenStatus;
    let params = JSON.stringify(user);
    return this.http.post(this.uri+'login', params, this.httOptions)
    .pipe(map(this.extractData))
  }

  updateUser(userToUpdate){
    let params = JSON.stringify(userToUpdate);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    })
    return this.http.put(this.uri+'updateUser/'+userToUpdate._id, params, {headers: headers})
    .pipe(map(this.extractData))
  }

  deteleUser(idUser, password){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    })
    return this.http.put(this.uri+'removeUser/'+idUser, {password: password}, {headers: headers})
    .pipe(map(this.extractData))
  }

  getUsers(){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    });
    return this.http.get(this.uri+ 'getUsers', {headers: headers})
    .pipe(map(this.extractData))
  }
}
