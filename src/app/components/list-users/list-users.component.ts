import { Component, OnInit } from '@angular/core';
import { RestUserService } from '../../services/restUser/rest-user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users:[];
  search;

  constructor(private rest:RestUserService) { }

  ngOnInit(): void {
    this.listUsers();
  }

  listUsers(){
    this.rest.getUsers().subscribe((res:any)=>{
      if(res.users){
        this.users = res.users;
        console.log('usuarios cargados')
      }else{
        alert(res.message)
      }
    },
    error => alert(error.error.message))
  }

}
