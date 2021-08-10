import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RestUserService } from '../restUser/rest-user.service';
import { CONNECTION } from '../global';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestContactService {

  public user;
  public token;
  public uri: string;
  public httpOptionsAuth = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.restUser.getToken()
    })
  };
  private extractData(res: Response){
    let body = res;
    return body || [] || {};
  }
  constructor(private restUser:RestUserService, private http:HttpClient) {
    this.uri = CONNECTION.URI;
   }
  
  saveContact(idUser, contact){
   let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.restUser.getToken()
    })
    let params = JSON.stringify(contact);
    return this.http.put(this.uri+idUser+'/setContact', params, {headers:headers})
    .pipe(map(this.extractData))
  }

  updateContact(idUser, contact){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.restUser.getToken()
    });
    let params = JSON.stringify(contact);
    return this.http.put(this.uri+idUser+'/updateContact/'+contact._id, params, {headers: headers})
    .pipe(map(this.extractData))
  }

  removeContact(idUser, idContact){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.restUser.getToken()
    });
    return this.http.put(this.uri+idUser+'/removeContact/'+idContact, null, {headers: headers})
    .pipe(map(this.extractData))
  }
 
}
