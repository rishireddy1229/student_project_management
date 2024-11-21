import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginstService } from 'services/loginst/loginst.service';

@Component({
  selector: 'app-loginst',
  templateUrl: './loginst.component.html',
  styleUrls: ['./loginst.component.css']
})
export class LoginstComponent {
  public studentLogins:any=[]
  public data:any;
  public status:boolean;
  constructor(private _loginstService:LoginstService, private _router:Router){

  }

   //show hide div variables
   userlogin = true;
   userregister = false;
   
   //Buttons clicks functionalities 
   user_register()
   {
     this.userlogin = false;
     this.userregister = true;
   }
 
   user_login()
   {
     this.userlogin = true;
     this.userregister = false;
   }
   addStuLogin(data:any){
    console.log(data)
    this._loginstService.addStudentsLogin(<any>data).subscribe(()=>{

    })
  }
  verifyStuLogin(data:any){
    this._loginstService.getStudentsLogin().subscribe((result)=>{
      console.log(result);
      this.studentLogins=result;
      console.log(this.studentLogins)
      this.studentLogins.forEach( (element:any) => {
        console.log(element)
        console.log(data)
        if(element.name === data.name && element.password === data.password ){
         this.status=true;
         return;
        }
      })
      if(this.status==true){
        alert("login successful");
        this._router.navigate(['/studentdashb']);
      } else{
         alert("incorrect credentials");
      }

    })
    // this.studentLogins.forEach( (element:any) => {
    //   console.log(element)
    //   console.log(data)
    //   if(element.name === data.name && element.password === data.password ){
    //    //this.status=true;
    //    alert("login sucessful");
    //    this._router.navigate(['/studentdashb']);
    //   }else{
    //     alert("incorrect credentials");
    //   }
    
    // })
    // if(this.status==true){
    //   alert("login sucessful");
    //   this._router.navigate(['/studentdashb']);
    // }else{
    //   alert("incorrect credentials");
    // }
  }
}
