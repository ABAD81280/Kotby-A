import { Component } from '@angular/core';
import { CRUDuserService } from "../shared/User/cruduser.service"
import { get } from '@angular/fire/database';
import { Router } from "@angular/router"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public crud:CRUDuserService,public router:Router){}
  
  email="";
  pas="";
  login()
  {
    this.crud.LogIN(this.email,this.pas)
  }
  gotoSingIn()
  {
    this.router.navigate(["/SignIn"])
  }
  gotoPasswordReset()
  {
    this.router.navigate(["/pas"])
  }
  
  
  
  
  
  
  


}
