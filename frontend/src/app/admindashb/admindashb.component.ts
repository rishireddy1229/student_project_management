import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdmindashbService } from 'services/admindashb/admindashb.service';
import { StudentdashbService } from 'services/studentdashb/studentdashb.service';
import { SupervisordashbService } from 'services/supervisordashb/supervisordashb.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-admindashb',
  templateUrl: './admindashb.component.html',
  styleUrls: ['./admindashb.component.css'],
})
export class AdmindashbComponent {
  public projects:any=[];
  public unSelProjects:any=[];
  public appProjects:any=[];
  public unAppProjects:any=[];
  public unSelProjectsUnique:any=[];
  public data:any;
  viewPro=false;
  viewSu=false;
  viewStu=false;
  public supervisors:any=[];
  public students:any=[];
  public editMode=false;
  public editMode1=false;
  public editMode2=false;
  public currentProjectId:any;
  public currentSuId:any;
  public currentStId:any;
  @ViewChild('supervisorsPost') form2: NgForm;
  @ViewChild('projectsPost') form1: NgForm;
  @ViewChild('studentsPost') form3: NgForm;
  // ngOnInit(): void {
  //   this.loadProjects();
  // }
  constructor(private _admindashbservice:AdmindashbService, private _supervisordashbservice:SupervisordashbService, private _studentdasbservice:StudentdashbService){

  }
  displayPro(){
    this.viewPro=true;
    this.viewSu=false;
    this.viewStu=false
  }
  displaySu(){
    this.viewPro=false;
    this.viewSu=true;
    this.viewStu=false
  }
  displayStu(){
    this.viewPro=false;
    this.viewSu=false;
    this.viewStu=true
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
    this.editMode=true;
  }
  addProjects(data:any){
    if(this.editMode==false){
      this._supervisordashbservice.addProjects(data).subscribe(()=>{
        alert("Project added");
      })
      //
      this.form1.setValue({
        _id:'',
        name:'',
        description:'',
        supervisor:''
      })
      //
    }
    else
    {
      this._admindashbservice.updateProjects(data).subscribe()
      this.editMode=false;
      this.form1.setValue({
        _id:'',
        name:'',
        description:'',
        supervisor:''
      })
    }
  }
  approveProjects(data:any){
    this._studentdasbservice.approveProjects(data).subscribe(()=>{
      alert("Project approved");
    })
      
  }

  loadProjects(){
    this._admindashbservice.getProjects().subscribe(
      (result:any)=>{
        console.log(result);
        this.projects= result;
        this.projects.forEach((element:any) => {
          if(element.selected==false){
            this.unSelProjects.push(element);
          }
        })
        console.log(this.unSelProjects);
        var count=0;
        for(var i=0; i<this.unSelProjects.length; i++){
          for(var j=i+1; j<this.unSelProjects.length-1; j++){
            if (this.unSelProjects[i]._id==this.unSelProjects[j]._id){
              count=count+1;
              console.log("True")
            }
            if(count==0){this.unSelProjectsUnique[i]=this.unSelProjects[i]}
          }
          count=0;
        }
        console.log(this.unSelProjectsUnique)
        //this.unSelProjectsUnique=this.unSelProjects.map((data: any) => _.uniqBy(data, 'id'));
      }
    )
  }
  loadProjectsForApp(){
    this._studentdasbservice.getGroupDetails().subscribe(
      (result)=>{
        this.appProjects=result;
        this.appProjects.forEach((element:any) => {
          if(element.status==false){
            this.unAppProjects.push(element);
          }
          
        })
    })
  }
  updateProjects(data:any){
    this._admindashbservice.updateProjects(<any>data).subscribe(()=>{

    })
  }
  deleteProjects(data:any){
    this._admindashbservice.deleteProjects(<any>data).subscribe(()=>{
      
    })
  }
  //supervisors
  addSupervisors(data:any){
    if(this.editMode1==false){
      this._supervisordashbservice.addSupervisors(data).subscribe(()=>{

      })
    }
    else
    {
      this._supervisordashbservice.updateSupervisors(data).subscribe()
      this.editMode1=false;
      this.form2.setValue({
        _id:'',
        name:'',
        phone:'',
        email:''
      })
    }

  }
  loadSupervisors(){
    this._supervisordashbservice.getSupervisors().subscribe(
      (result:any)=>{
        console.log(result);
        this.supervisors= result;
      }
    )
  }
  deleteSupervisors(data:any){
    this._supervisordashbservice.deleteSupervisors(data).subscribe(()=>{

    })

  }
  editSupervisors(data:any){
    this.currentSuId=data;
    let currentSu= this.supervisors.find( (p:any)=>{
       return p._id === data
    })
    this.form2.setValue({
      _id:currentSu._id,
      name:currentSu.name,
      phone:currentSu.phone,
      email:currentSu.email
    })
    this.editMode1=true;
  }

  //students
addStudents(data:any){
  if(this.editMode2==false){
    this._studentdasbservice.addStudents(data).subscribe(()=>{

    })
  }
  else
  {
    this._studentdasbservice.updateStudents(data).subscribe()
    this.editMode2=false;
    this.form3.setValue({
      _id:'',
      name:'',
      phone:'',
      email:''
    })
    
  }

}
loadStudents(){
  this._studentdasbservice.getStudents().subscribe(
    (result:any)=>{
      console.log(result);
      this.students= result;
    }
  )
}
deleteStudents(data:any){
  this._studentdasbservice.deleteStudents(data).subscribe(()=>{

  })

}
editStudents(data:any){
  this.currentSuId=data;
  let currentSt= this.students.find( (p:any)=>{
     return p._id === data
  })
  this.form3.setValue({
    _id:currentSt._id,
    name:currentSt.name,
    phone:currentSt.phone,
    email:currentSt.email
  })
  this.editMode2=true;
}
}



