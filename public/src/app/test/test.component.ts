import { Component } from '@angular/core';
import {CRUDuserService} from "../shared/User/cruduser.service"
import { Router } from "@angular/router"
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  constructor(private crud:CRUDuserService,public router:Router){}

  email:string=""

PasswordReset()
  {
    this.crud.PasswordReset(this.email)
  }
  goHome(){
    this.router.navigate(["/Home"])
  }
}
