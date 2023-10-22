import { Component } from '@angular/core';
import { Router } from "@angular/router"
import{collection,collectionGroup,Firestore,getDocs,getFirestore, query, where}from 'firebase/firestore'
import{collectionData}from "@angular/fire/firestore"
import {CRUDbooksService} from "../shared/Books/crudbooks.service"
import { Observable,from } from 'rxjs';
import emailjs from "@emailjs/browser"
import { FormBuilder, FormGroup } from '@angular/forms';
import {Clipboard} from '@angular/cdk/clipboard';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  allBookdata!:Observable<any>
  FamousBooks!:Observable<any>
  
constructor(public router:Router,public CRUD:CRUDbooksService,private fd:FormBuilder,private clipboard: Clipboard){this.getAllBooks(),this.FamousBooks1(),this.setTheName()}
  
  userID=sessionStorage.getItem("UID")

  username=sessionStorage.getItem("UN")
  userInORout = this.LogInLogOut()
  thcategory=[{category:"التنمية البشرية وتطوير الذات"},
              {category:"الحرب والعلوم العسكرية"},
              {category:"الحب والعلاقات الأسرية"},
              {category:"العلوم الاسلامية"},
              {category:"التسويق وإدارة الأعمال"},
              {category:"مذكرات وسير ذاتية"},
              {category:"روايات رعب"}]
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
  search1:string=""
  namecategory:string=""
  setTheName()
  {
    if(this.category=="")
    {
      this.namecategory = "كل الكتب"
      return this.namecategory
    }
    else
    {
      this.namecategory = this.category
      return this.namecategory
    }
  }
  setThecategory(category:string)
  {
    this.category = category
    this.getAllBooks()
  }
  getAllBooks()
  {
    
    this.allBookdata=from(this.CRUD.getAllBooks(this.category,this.search1))
    console.log(this.allBookdata)
    
  }
  FamousBooks1()
  {
    this.FamousBooks=from(this.CRUD.FamousBook())
  }
  
  trending(pdf:string)
  {
    this.CRUD.trending(pdf)
    
  }
  //النافذه
  thename:string=""
  theurl:string=""
  thepdf:string=""
  thecategory:string=""
  thedescription:string=""
  thewriter:string=""
  trackByPerson(name:string,url:string,pdf:string,category:string,description:string,writer:string)
  {
    this.thename = name
    this.thepdf = pdf
    this.thecategory = category
    this.thedescription = description
    this.thewriter = writer
    this.theurl = url
  }
  //الحذف
  deleturl:string=""
  deletimg:string=""
  deletpdf:string=""
  deletname:string=""
  setDlet(url:string,img:string,pdf:string,name:string)
  {
    this.deleturl = url
    this.deletimg = img 
    this.deletpdf = pdf
    this.deletname = name
  }
  deletBook(url:string,img:string,pdf:string)
  {
    this.CRUD.deletBook(url,img,pdf)
    
  }
  // ارسل الكتاب
  to_name:string=""
  from_name:string=""
  from_email:string=""
  message:string=""
  Book:string=""
  to_email:string=""
  setTheSendEmail(book:string)
  {
    this.Book = book
  }
  async sendBook()
  {
    if(this.to_email != ""&& this.to_name!=""&&this.from_name!=""&&this.from_email!=""&&this.message!="")
    {
    emailjs.init("pn2zvPl5Nbo53ALQn")
    let email = await emailjs.send("service_8wob4wj","template_hzgpx5d",{
      to_name:this.to_name,
      from_name:this.from_name,
      from_email:this.from_email,
      message:this.message,
      Book:this.Book,
      to_email:this.to_email,
      });
      alert("The mail was sent successfully👍")
    }
    else
    {
      alert("The data was not entered successfully👎")
    }
  }
  //QR
  qr:string=""
  setQRCode(qr:string)
  {
    this.qr=qr
  }
  //send whatsapp
  sendMessageWhatsapp(pdf:string) 
  {
    const message = pdf;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl);
  }
  //Copy
  Copy(pdf:string)
  {
    this.clipboard.copy(pdf)
    alert("Copied")
  }
  //download
  downloadPDF(pdf:string,name:string)
  {
    this.CRUD.downloadPDF(pdf,name)
  }
}
