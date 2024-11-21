import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashbComponent } from './admindashb/admindashb.component';
import { AppComponent } from './app.component';
import { LoginaComponent } from './logina/logina.component';
import { LoginstComponent } from './loginst/loginst.component';
import { LoginsuComponent } from './loginsu/loginsu.component';
import { StudentdashbComponent } from './studentdashb/studentdashb.component';
import { SupervisordashbComponent } from './supervisordashb/supervisordashb.component';

const routes: Routes = [
  // {path:"",component:AppComponent},
  {path:"logina",component: LoginaComponent},
  {path:"loginst",component: LoginstComponent},
  {path:"loginsu",component: LoginsuComponent},
  {path:"studentdashb",component: StudentdashbComponent},
  {path:"admindashb",component: AdmindashbComponent},
  {path:"supervisordashb",component:SupervisordashbComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
