import { Component, OnInit } from '@angular/core';
import { RestUserService } from '../../services/restUser/rest-user.service';
import { RestContactService } from '../../services/restContact/rest-contact.service'; 
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-home-contacts',
  templateUrl: './home-contacts.component.html',
  styleUrls: ['./home-contacts.component.css']
})
export class HomeContactsComponent implements OnInit {
  contacts:[];
  user;
  contactSelected:Contact;

    constructor(private restUser:RestUserService, private restContact:RestContactService) { }

  ngOnInit(): void {
    this.contactSelected = new Contact('','','',null)
    this.user = this.restUser.getUser()
    this.contacts = this.user.contacts;
    console.log(this.contacts)
  }

  getContact(contact){
    this.contactSelected = contact;
    console.log(contact._id)
  }

  updateContact(){
    this.restContact.updateContact(this.user._id, this.contactSelected).subscribe((res:any)=>{
      if(res.updateContact){
        alert(res.message)
        localStorage.setItem('user', JSON.stringify(this.user))
      }else{
        alert(res.message);
        this.user = this.restUser.getUser()
        this.contacts = this.user.contacts;
      }
    },
    error => alert(error.error.message))
  }

  removeContact(){
    this.restContact.removeContact(this.user._id, this.contactSelected._id).subscribe((res:any)=>{
      if(res.contactPull){
        alert(res.message);
        localStorage.setItem('user', JSON.stringify(res.contactPull))
        this.user = this.restUser.getUser()
        this.contacts = this.user.contacts;
      }else{
        alert(res.message);
      }
    },
    error => alert(error.error.message))
  }

}
