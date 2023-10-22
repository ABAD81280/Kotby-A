import { Component } from '@angular/core';
import {CRUDbooksService} from "../shared/Books/crudbooks.service"
import { Observable, from } from 'rxjs';
import { Router } from "@angular/router"
import {Location} from '@angular/common';
@Component({
  selector: 'app-update-books',
  templateUrl: './update-books.component.html',
  styleUrls: ['./update-books.component.css']
})
export class UpdateBooksComponent {
  allBooks!:Observable<any>
constructor(private crud:CRUDbooksService,private ro :Router,private location:Location){this.getAllBook()}
thcategory=[{category:"التنمية البشرية وتطوير الذات"},
              {category:"الحرب والعلوم العسكرية"},
              {category:"الحب والعلاقات الأسرية"},
              {category:"العلوم الاسلامية"},
              {category:"التسويق وإدارة الأعمال"},
              {category:"مذكرات وسير ذاتية"},
              {category:"روايات رعب"}]
Admen()
  {
    const t = sessionStorage.getItem("UT")
    if(t!="X")
    {
      this.ro.navigate(["/Home"])
    }
  }
getAllBook()
{
  this.allBooks = from(this.crud.getAllBooksBy())
  
}
//تحديث
name:string=""
description:string=""
url:string=""
writer:string=""
category:string=""
setValeUpdate(url:string,name:string,description:string,writer:string,category:string)
{
  this.name = name;
  this.url = url;
  this.description = description;
  this.writer = writer;
  this.category = category;
}
updateBook()
{
  this.crud.updateBooks(this.url,this.name,this.category,this.description,this.writer)
}
setTheCategory(category:string)
{
  this.category = category
}
//
goBack()
{
  this.location.back()
}

}
