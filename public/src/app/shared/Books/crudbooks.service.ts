import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore"
import {Books} from "../Books/books"
import {AngularFireStorage} from "@angular/fire/compat/storage"
import { getFirestore, collection,query,where,getDoc,getDocs,setDoc, doc, addDoc,updateDoc,collectionGroup,deleteDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes,uploadString,getDownloadURL,deleteObject } from "firebase/storage";
import { Observable } from 'rxjs';
import { Router } from "@angular/router"

@Injectable({
  providedIn: 'root'
})
export class CRUDbooksService  {

  constructor(public fir:AngularFirestore, public firs:AngularFireStorage,public router:Router) { }
  addBookFile(file:File|undefined ,name:string|undefined, book:Books)
  {
    if(file!=null)
    {
      
      const metadata = {
        contentType: 'image/jpeg',
      };
    const ref1 =ref(getStorage(),"Books/"+book.name+"/"+name)
    uploadBytes(ref1,file,metadata).then((snapshot)=>{
      alert("OK")
    })
  }
  else
  {
    alert("No")
  }
  }


  //اضافه كتب في الاستورج
  async addBooksStoreg(eventimg:any)
  {
    const fil = eventimg.targer.files[0]
    if(fil )
    {
      console.log(fil)
      const path='Books/'+fil.name
      const add = await this.firs.upload(path,fil)
    }
    
  }
  
  async ff(name:string)
  {
    
    if(name!="")
    {
      const metadata = {
        contentType: 'image/jpeg',
      };
      if(name!=undefined)
      {
        
      const pat = ref(getStorage(),"Books/")
      const url = ""
      uploadString(pat,name).then((snapshot)=>{
        alert("OK")
      })
    }
    }
    else{
      alert("no")
    }
    
  }
  isLoading:boolean=false;
  async addBook(eventimg: any, eventPDF: any, book: Books) {
    // تحقق من أن الخاصية eventPDF.target.file غير محددة
    if (eventPDF.target.files[0]) {
      // تحميل ملف PDF
      const filepdf = eventPDF.target.files[0];
      const filepdfPath = "books/" + filepdf.name;
      const snapPdf = await this.firs.upload(filepdfPath, filepdf);
      const urlpdf = await snapPdf.ref.getDownloadURL();
  
      // تحقق من أن الخاصية eventimg.target.file غير محددة
      if (eventimg.target.files[0]) {
        // تحميل ملف الصورة
        const fileimg = eventimg.target.files[0];
        const fileimgPath = "books/" + fileimg.name;
        const snapimg = await this.firs.upload(fileimgPath, fileimg);
        const urlimg = await snapimg.ref.getDownloadURL();
  
        // حفظ بيانات الكتاب في Firestore
        const ref = collection(getFirestore(), "Books");
        book.url = urlimg;
        book.pdf = urlpdf;
        book.pathimg = fileimgPath;
        book.pathpdf = filepdfPath;
        addDoc(ref, book).then(()=>{
          alert("The book has been added successfully")
          window.location.reload();
        })
        
        
      } else {
        // لم يتم تعيين ملف الصورة على قيمة بعد.
        console.log("لم يتم تعيين ملف الصورة على قيمة بعد.");
      }
    } else {
      // لم يتم تعيين ملف PDF على قيمة بعد.
      console.log("لم يتم تعيين ملف PDF على قيمة بعد.");
    }
  }
  
  
  
  async getAllBooks(category?:string)
  {
    const allbookData:any=[]
    const UsersRef = collection(getFirestore(), "Books");
    if(category == "")
    {
      const q = query(UsersRef,where("name","!=",""));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
      allbookData.push(doc.data())
      })
    }
    else
    {
      const q =query(UsersRef,where("category","==",category))
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
      allbookData.push(doc.data())
      })
    }
  console.log(allbookData)
    return allbookData
  }
  async deletBook(url:string,imgPath:string,pdfpath:string)
  {
    const db =collection(getFirestore(),"Books");
    const q = query(db,where("url","==",url));
    const qsnap = await getDocs(q);
    qsnap.forEach((doc1)=>{
      deleteDoc(doc(getFirestore(),"Books",doc1.id)).then(()=>{
        const deleteimg = ref(getStorage(),imgPath)
        const deletepdf = ref(getStorage(),pdfpath)
        deleteObject(deleteimg).then(()=>{

        deleteObject(deletepdf).then(()=>{
          
          alert("delete Successfully")
          window.location.reload();
      })
    })
      })
    })
    
    
  }
  //

}