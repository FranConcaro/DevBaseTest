import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService{
  user:any;
  constructor(private http: HttpClient) {}
  getUsers(){
    const usernames = ["GrahamCampbell","fabpot","weierophinney","rkh","josh"];
    let response: Object[] = [];
    for(let i=0;i<usernames.length;i++){
      let apiUrl = "https://api.github.com/users/"+ usernames[i];
       this.http.get(`${apiUrl}`).subscribe(users => {
         
        response[i] = users;
      });
    }
    return response
  }
}
