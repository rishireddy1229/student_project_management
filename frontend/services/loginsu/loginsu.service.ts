import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginsuService {

  public url="http://localhost:3000/addSupervisorsLogin";
  public url1="http://localhost:3000/readSupervisorsLogin";

  constructor(private http:HttpClient) { }
  getSupervisorsLogin(){
    return this.http.get(this.url1);
  }
  addSupervisorsLogin(data:any){
    console.log(data);
    alert("registered");
    return this.http.post(this.url,<any>data);
  }
}
