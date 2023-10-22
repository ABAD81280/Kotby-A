import { Component } from '@angular/core';
import { Router } from "@angular/router"
import{collection,collectionGroup,Firestore,getDocs,getFirestore, query, where}from 'firebase/firestore'
import{collectionData}from "@angular/fire/firestore"
import {CRUDbooksService} from "../shared/Books/crudbooks.service"
import { Observable,from } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  allBookdata!:Observable<any>
constructor(public router:Router,public CRUD:CRUDbooksService){this.getAllBooks()}
  userID=sessionStorage.getItem("UID")
  username=sessionStorage.getItem("UN")
  userInORout = this.LogInLogOut()
  LogInLogOut()
  {
    if(sessionStorage.getItem("UN")==null)
    {
      return false
    }
    else
    {
      return true
    }
  }
  ClerSession()
  {
    sessionStorage.clear()
    window.location.reload();
  }
  GoLogIn()
  {
    this.router.navigate(["/Login"])
  }
  GotoAdmen()
  {
    this.router.navigate(["/admen"])
  }
  typU()
  {
    if(sessionStorage.getItem("UT")=="X")
    {
      return true
    }
    else
    {
      return false
    }
  }
  updateC()
  {
    this.router.navigate(["/UpdateU"])
  }
  category:string=""
  setThecategory(category:string)
  {
    this.category = category
    this.getAllBooks()
  }
  getAllBooks()
  {
    
    this.allBookdata=from(this.CRUD.getAllBooks(this.category))
    console.log(this.allBookdata)
    
  }
  deletBook(url:string,img:string,pdf:string)
  {
    this.CRUD.deletBook(url,img,pdf)
    
  }
  
}
