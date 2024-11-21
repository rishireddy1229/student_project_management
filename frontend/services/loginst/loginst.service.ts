import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginstService {
  public url="http://localhost:3000/addStudentsLogin";
  public url1="http://localhost:3000/readStudentsLogin";
  constructor(private http:HttpClient) { }

  getStudentsLogin(){
    return this.http.get(this.url1);
  }
  addStudentsLogin(data:any){
    console.log(data);
    alert("registered");
    return this.http.post(this.url,<any>data);
  }

}
