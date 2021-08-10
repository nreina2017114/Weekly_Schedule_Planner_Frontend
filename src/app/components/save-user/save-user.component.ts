import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { RestUserService } from '../../services/restUser/rest-user.service';

@Component({
  selector: 'app-save-user',
  templateUrl: './save-user.component.html',
  styleUrls: ['./save-user.component.css']
})
export class SaveUserComponent implements OnInit {
  public user:User;
  public token;
  public userLogg;
  public roleOptions = ['ROLE_ADMIN', 'ROLE_USER']

  constructor(private restUser:RestUserService) {
    this.user = new User('','','','','','','','','', []);
    this.token = this.restUser.getToken();
    this.userLogg = this.restUser.getUser();
   }

  ngOnInit(): void {
  }

  onSubmit(createUser){
    this.restUser.saveUserByAdmin(this.user, this.userLogg._id).subscribe((res:any)=>{
      if(res.userSaved){
        alert(res.message);
        this.user = new User('', '', '', '', '', '', '', '', '', null);
        createUser.reset();
      }else{
        alert(res.message)
      }
      error =>{
        console.log(<any>error);
      }
    })
  }

}
