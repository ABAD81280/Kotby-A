import { Component } from '@angular/core';
import {CRUDuserService} from "../shared/User/cruduser.service"
import { Router } from "@angular/router"
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
constructor(public CRUD:CRUDuserService,public router:Router){
}
uid=sessionStorage.getItem("UID")

name=""


updateU(){
this.CRUD.Updateuser(this.uid,this.name)
}
goHome()
{
  this.router.navigate(["/Home"])
}

}
