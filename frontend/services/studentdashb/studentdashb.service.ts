import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


import { provideProtractorTestingSupport } from '@angular/platform-browser';
import { ParseLocation, R3SelectorScopeMode } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class StudentdashbService {

  public url0="http://localhost:3000/readProjects";
  public url="http://localhost:3000/readStudents";
  public url1="http://localhost:3000/addStudents";
  public url2="http://localhost:3000/updateStudents";
  public url3="http://localhost:3000/deleteStudents";
  public url4="http://localhost:3000/addGroupDetails";
  public url5="http://localhost:3000/chooseProjects";
  public url6="http://localhost:3000/readGroupDetails";
  public url7="http://localhost:3000/updateGroupProjects";

  constructor(private http: HttpClient) { }
  

  getProjects(){
    return this.http.get(this.url0);
  }
  chooseProjects(data:any){
    return this.http.put(this.url5,data)
  }
  getStudents(){
    return this.http.get(this.url);
  }
  addStudents(data:any){
    console.log(data);
    alert("student added");
    return this.http.post(this.url1,<any>data);
  }
  updateStudents(data:any){
    console.log(data);
    alert("student updated");
    return this.http.put(this.url2,<any>data);
  }

  deleteStudents(data:any){
    const httpOptions = {
       body: data
  };
    alert("student deleted");
    return this.http.delete(this.url3+"/"+data);
  }
  addGroupDetails(data:any){
    console.log(data);
    alert("Details sent");
    return this.http.post(this.url4,<any>data);
  }
  getGroupDetails(){
    // console.log(data);
    return this.http.get(this.url6);
  }
  approveProjects(data:any){
    console.log(data);
    return this.http.put(this.url7,data)
  }

}

