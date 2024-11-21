import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logina',
  templateUrl: './logina.component.html',
  styleUrls: ['./logina.component.css']
})
export class LoginaComponent {

  constructor( private _router:Router){

  }

  verifyAdLogin(data:any){

      if(data.name === 'cvr' && data.password === 'cse' ){
        alert("login successful");
        this._router.navigate(['/admindashb']);
      }
      else{
        alert("incorrect credentials");
      }
      
    ;
  }
}
