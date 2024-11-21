import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentdashbComponent } from './studentdashb/studentdashb.component';
import { AdmindashbComponent } from './admindashb/admindashb.component';
import { SupervisordashbComponent } from './supervisordashb/supervisordashb.component';
import { FormsModule } from '@angular/forms';
import { LoginaComponent } from './logina/logina.component';
import { LoginstComponent } from './loginst/loginst.component';
import { LoginsuComponent } from './loginsu/loginsu.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentdashbComponent,
    AdmindashbComponent,
    SupervisordashbComponent,
    LoginaComponent,
    LoginstComponent,
    LoginsuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
