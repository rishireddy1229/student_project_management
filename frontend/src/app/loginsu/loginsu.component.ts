import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginsuService } from 'services/loginsu/loginsu.service';
// import { constructor } from 'jasmine';

@Component({
  selector: 'app-loginsu',
  templateUrl: './loginsu.component.html',
  styleUrls: ['./loginsu.component.css']
})
export class LoginsuComponent {

  public supervisorLogins:any=[]
  public data:any;
  public status:boolean;
  constructor(private _loginsuService:LoginsuService, private _router:Router){

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
  addSuLogin(data:any){
   console.log(data)
   this._loginsuService.addSupervisorsLogin(<any>data).subscribe(()=>{

   })
 }
 verifySuLogin(data:any){
   this._loginsuService.getSupervisorsLogin().subscribe((result)=>{
     console.log(result);
     this.supervisorLogins=result;
     console.log(this.supervisorLogins)
     this.supervisorLogins.forEach( (element:any) => {
      console.log(element)
      console.log(data)
      if(element.name === data.name && element.password === data.password ){
       this.status=true;
       return;
      }
    })
    if(this.status==true){
      alert("login successful");
      this._router.navigate(['/supervisordashb']);
    } else{
       alert("incorrect credentials");
    }
   });
  //  this.supervisorLogins.forEach( (element:any) => {
  //    console.log(element)
  //    console.log(data)
  //    if(element.name === data.name && element.password === data.password ){
  //     alert("login successful");
  //     this._router.navigate(['/supervisordashb']);
  //    }
  //    else{
  //     alert("incorrect credentials");
  //   }
     
  //  })
  //  if(this.status==true){
  //   alert("login successful");
  //      this._router.navigate(['/supervisordashb']);
  //  } else{
  //   alert("incorrect credentials");
  // }
 }
  
}

