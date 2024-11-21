import { Component, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { AdmindashbService } from 'services/admindashb/admindashb.service';
import { StudentdashbService } from 'services/studentdashb/studentdashb.service';
import { SupervisordashbService } from 'services/supervisordashb/supervisordashb.service';

@Component({
  selector: 'app-supervisordashb',
  templateUrl: './supervisordashb.component.html',
  styleUrls: ['./supervisordashb.component.css']
})
export class SupervisordashbComponent {

  public projects:any=[];
  public supervisors:any=[];
  public editMode=false;
  public currentProjectId:any;
  public currentSuId:any;
  public allSuProjects:any=[];
  public suProjects:any=[];
  public completionPercent:any=[];
  public viewProgress=false;
  @ViewChild('projectsPost') form1: NgForm;
  @ViewChild('supervisorsPost') form2: NgForm;
  constructor(private _supervisordashbservice:SupervisordashbService, private _admindashbservice:AdmindashbService , private _studentdashbService:StudentdashbService){

  }
 
  // displayAddProContainer=false
  // displayAddPro(){
  //   this.displayAddProContainer=true
  // }
  addProjects(data:any){
    if(this.editMode==false){
      this._supervisordashbservice.addProjects(data).subscribe(()=>{
        alert("project added")

      })
    }
    else
    this._admindashbservice.updateProjects(data).subscribe()

  }
  loadProjects(){
    this._admindashbservice.getProjects().subscribe(
      (result:any)=>{
        console.log(result);
        this.projects= result;
      }
    )
  }
  deleteProjects(data:any){
    this._admindashbservice.deleteProjects(data).subscribe(()=>{

    })

  }
  editProjects(data:any){
    this.currentProjectId=data;
    let currentProject= this.projects.find( (p:any)=>{
       return p._id === data
    })
    this.form1.setValue({
      _id:currentProject._id,
      name:currentProject.name,
      description:currentProject.description,
      supervisor:currentProject.supervisor
    })
    this.editMode=!this.editMode;
  }
  loadSupervisorProjects(data:any){
    this._studentdashbService.getGroupDetails().subscribe(
      (result)=>{
        console.log(data);
        this.allSuProjects=result;
        this.allSuProjects.forEach((element:any) => {
          if(element.supervisor==data.sId){
            this.suProjects.push(element);
          }     // console.log(this.allStuProjects)
        })
      })
    }
    monitorCompletion(project:any){
      this.completionPercent=this._supervisordashbservice.getCompletion();
      //this.completionPercent[project._id]=this._supervisordashbservice.completePercent[project._id];
      console.log(this._supervisordashbservice.completePercent[project._id])
      this.viewProgress=true;
      console.log(this.completionPercent[project._id])
    }
}