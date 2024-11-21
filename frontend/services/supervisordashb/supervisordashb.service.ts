import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SupervisordashbService {

  public url0="http://localhost:3000/addProjects";
  public url="http://localhost:3000/readSupervisors";
  public url1="http://localhost:3000/addSupervisors";
  public url2="http://localhost:3000/updateSupervisors";
  public url3="http://localhost:3000/deleteSupervisors";
  public completePercent:any=[];

  constructor(private http: HttpClient) { }
  addProjects(data:any){
    return this.http.post(this.url0,data)
  }
  getSupervisors(){
    return this.http.get(this.url);
  }
  addSupervisors(data:any){
    console.log(data);
    alert("supervisor added");
    return this.http.post(this.url1,<any>data);
  }
  updateSupervisors(data:any){
    console.log(data);
    alert("supervisor updated");
    return this.http.put(this.url2,<any>data);
  }

  deleteSupervisors(data:any){
    const httpOptions = {
       body: data
  };
    alert("supervisor deleted");
    return this.http.delete(this.url3+"/"+data);
  }
  updateCompletion(data:any,percent:any){
    this.completePercent[data._id]=percent;
    console.log(percent)
    console.log(this.completePercent)
    alert("progress updated")
    console.log(data._id)
   
  }
  getCompletion(){
    console.log(this.completePercent);
    return this.completePercent;
  }
 
}