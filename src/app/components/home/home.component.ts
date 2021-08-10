import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../animations/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fadeIn]
})
export class HomeComponent implements OnInit {
  username:string;

  constructor() { }

  ngOnInit(): void {
  }

  saveUsername(){
    console.log(this.username);
    localStorage.setItem('username', this.username);
  }

}
