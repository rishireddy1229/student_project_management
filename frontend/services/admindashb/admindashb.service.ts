import { provideImageKitLoader } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { AdmindashbComponent } from 'src/app/admindashb/admindashb.component';
@Injectable({
   providedIn: 'root'
})

export class AdmindashbService {

  public url="http://localhost:3000/readProjects";
  public url1="http://localhost:3000/addProjects";
  public url2="http://localhost:3000/updateProjects";
  public url3="http://localhost:3000/deleteProjects";
  public url4:any;

  public data:any;
  constructor(private http:HttpClient) { }
 
  getProjects(){
    return this.http.get(this.url);
  }
  addProjects(data:any){
    console.log(data);
    alert("project added");
    return this.http.post(this.url1,<any>data);
  }
  updateProjects(data:any){
    console.log(data);
    alert("project updated");
    return this.http.put(this.url2,<any>data);
  }

  deleteProjects(data:any){
    const httpOptions = {
       body: data
  };
    alert("project deleted");
    this.url4=this.url3+"/"+data 
    return this.http.delete(this.url3+"/"+data);
  }

}
