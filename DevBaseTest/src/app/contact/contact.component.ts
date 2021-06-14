import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  user_id: any;
  users: any;
  response:any[]=[];
  constructor(public route: ActivatedRoute, private service: UsersService) { }

  ngOnInit(){
    this.route.params.subscribe((params: Params) => {
      this.user_id = params.userid; // same as :username in route
      this.users = this.service.getUsers() 
    });
  }
  
}
