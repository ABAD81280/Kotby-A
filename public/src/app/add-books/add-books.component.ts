import { Component } from '@angular/core';
import {CRUDbooksService} from "../shared/Books/crudbooks.service"
import {Books} from "../shared/Books/books"
import {AngularFirestore} from "@angular/fire/compat/firestore"
import {getDownloadURL} from "firebase/storage";
import { from } from 'rxjs';
import { Router } from "@angular/router"
@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent {
  
  
  constructor(public CRUD:CRUDbooksService,private firestore:AngularFirestore,public ro:Router){this.Admen()}
  bookOpj:Books={
    name: '',
    description: '',
    price: 0,
    writer: '',
    category: '',
    pdf: '',
    url: "",
    pathimg: '',
    pathpdf: ''
  }
  name:string=""
  description:string=""
  price:number=0
  writer:string=""
  category:string=""
  
  fil:string=""
  eventimg:any;
  eventpdf:any;
  setEventimg(event:any)
  {
    this.eventimg = event
  }
  setEventpdf(event:any)
  {
      this.eventpdf = event
  }
  GotoHome()
  {
    this.ro.navigate(["/Home"])
  }
  setTheCategory(category:string)
  {
    this.category = category
  }
  file1()
  {
    
    this.bookOpj.name=this.name;
    this.bookOpj.price=this.price;
    this.bookOpj.description=this.description;
    this.bookOpj.writer=this.writer;
    this.bookOpj.category=this.category;
    this.CRUD.addBook(this.eventimg,this.eventpdf,this.bookOpj)
    
  }
  Admen()
{
  const t = sessionStorage.getItem("UT")
  if(t!="X")
  {
    this.ro.navigate(["/Home"])
  }
}
  
  
    
  
  
  
  

}
