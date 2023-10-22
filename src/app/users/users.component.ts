import { Component , OnInit } from '@angular/core';
import { User } from '../shared/User/user';
import { CRUDuserService } from '../shared/User/cruduser.service';
import { Router } from "@angular/router"
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

constructor(private serveuser :CRUDuserService,public router:Router){}
ngOnInit(): void {

}

userOpj : User ={
  email: '',
  pas: '',
  fullName: '',
  typ: 'Y'
}

email:string= ''
pas:string= ''
fullName:string= ''
typ:string= ''

AddUesrs()
  {
    this.userOpj.email=this.email;
    this.userOpj.fullName=this.fullName;
    this.userOpj.pas=this.pas;
    this.serveuser.AddUser(this.userOpj)
  //this.auth.createUserWithEmailAndPassword(this.userOpj.email,this.userOpj.pas)
  }
  gotoLogin()
  {
    this.router.navigate(["/Login"])
  }






}
