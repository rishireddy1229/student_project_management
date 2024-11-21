import { Component, ViewChild } from '@angular/core';
import { AdmindashbService } from 'services/admindashb/admindashb.service';
import { StudentdashbService } from 'services/studentdashb/studentdashb.service';
import { SupervisordashbService } from 'services/supervisordashb/supervisordashb.service';

@Component({
  selector: 'app-studentdashb',
  templateUrl: './studentdashb.component.html',
  styleUrls: ['./studentdashb.component.css']
})
export class StudentdashbComponent {

  projects:any=[]
  selProjects:any=[];
  selReport=false;
  stuDash=true;
  page1=true;
  viewStatus=false;
  allStuProjects:any=[];
  stuProjects:any=[];
  i:any=0;
  normalProjectsList:any=[];
  updateComp=false;
  constructor(private _studentdashbService: StudentdashbService, private _admindashbService: AdmindashbService, private _supervisordashbService: SupervisordashbService ){

  }
  loadProjects(){
    this._studentdashbService.getProjects().subscribe(
      (result:any)=>{
        console.log(result);
        this.projects= result;
        this.projects.forEach((element:any) => {
          if(element.selected==false){
            this.selProjects.push(element);
          }
          console.log(this.selProjects);
         
        });
      }
    )
  }
  // updateProjects(){
  //   this._studentdashbService.chooseProjects().subscribe(
  //     (result:any)=>{
  //       console.log(result)
  //     }
  //   )
  // }
  chooseProject(data:any){
    this.selReport=true;
    this._studentdashbService.chooseProjects(data).subscribe(
      (result:any)=>{
        console.log(result)
        alert("project selected. You cannot undo. please fill the details");
      }
    )
  }
  reportGroup(data:any){

    this._studentdashbService.addGroupDetails(data).subscribe(
      (result:any)=>{
        console.log(result)
      }
    )
    this.page1=false;
    this.viewStatus=!this.viewStatus;
  }
  loadStudentProjects(data:any){
    this._studentdashbService.getGroupDetails().subscribe(
      (result)=>{
        console.log(data);
        this.allStuProjects=result;
        this.allStuProjects.forEach((element:any) => {
          if(element.s1Id==data.sId|| element.s1Id==data.sId || element.s1Id==data.sId){
            this.stuProjects.push(element);
          }
          // console.log(this.allStuProjects)
    })
  })
  }
  updateCompletion(data:any, percent:any){
    this.updateComp=!this.updateComp;
    // const body={
    //   project,
    //   percent,
    // }
    this._supervisordashbService.updateCompletion(data,percent)
 
   
  }
}