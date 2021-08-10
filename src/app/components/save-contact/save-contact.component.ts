import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';
import { RestContactService } from '../../services/restContact/rest-contact.service';
import { RestUserService } from '../../services/restUser/rest-user.service';

@Component({
  selector: 'app-save-contact',
  templateUrl: './save-contact.component.html',
  styleUrls: ['./save-contact.component.css']
})
export class SaveContactComponent implements OnInit {

  public contact:Contact;
  public token;
  public user;

  constructor(private restContact:RestContactService, private restUser:RestUserService) {
    this.contact = new Contact('','','',null);
   }

  ngOnInit(): void {
    this.token = this.restUser.getToken();
    this.user = this.restUser.getUser();
  }

  onSubmit(form){
    this.restContact.saveContact(this.user._id, this.contact).subscribe((res:any)=>{
      if(res.pushContact){
        alert(res.message)
        form.reset()
        delete res.pushContact.password;
        this.user = res.pushContact;
        localStorage.setItem('user', JSON.stringify(this.user));
      }else{
        alert(res.message)
      }
    },
    error=> alert(error.error.message))
  }

}
