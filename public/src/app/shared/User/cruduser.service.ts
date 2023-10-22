import { Injectable, OnInit, importProvidersFrom } from '@angular/core';
import {AngularFirestore } from "@angular/fire/compat/firestore"
import {User} from "../User/user"
import {AngularFireAuth} from "@angular/fire/compat/auth"
import { Router } from "@angular/router"
import { from } from 'rxjs';
import { getFirestore, collection,query,where,getDoc,getDocs,setDoc, doc, addDoc,updateDoc } from 'firebase/firestore';
@Injectable({
  providedIn: 'root'
})
export class CRUDuserService implements OnInit {

  constructor(private Fir :AngularFirestore,public auth:AngularFireAuth,public router:Router/*,public db:Firestore*/) { }
  ngOnInit() :void {
  }
  
  AddUser(user:User)
  {
    if(user.fullName !="")
    {
      this.auth.createUserWithEmailAndPassword(user.email,user.pas).then( ()=>{
      localStorage.setItem("token","true")
      alert("Sing in successfull")
      const ref = collection(getFirestore(),"Users")
      addDoc(ref,user)
      this.router.navigate(["/Login"])
    },err =>{
      alert(err.message)
      this.router.navigate(["/SignIn"])
    })
  }
  else
  {
    alert("name is on correct")
  }
  }
  LogIN(email:string,pas:string)
  {
    this.auth.signInWithEmailAndPassword(email,pas).then(()=>{
      this.SessionU(email)
      this.router.navigate(["/Home"])
    },err=>{
      alert(err.message)
    })
  }
  LogOUT(){
    sessionStorage.clear()
  }
  getAllUsers()
  {
    return this.Fir.collection("/Users").snapshotChanges()
  }
  //Q = collection(this.db,"Users")
  getUser()
  {
    //const userID=query(this.Q,where("Email","==","abad81280@gmail.com"))
    //return this.Fir.collection("/Users/"+userID).snapshotChanges()
  }
async SessionU(email:string)
{
    const UsersRef = collection(getFirestore(), "Users");
    const q = query(UsersRef, where("email", "==",email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
    sessionStorage.setItem("UID",doc.id)
    sessionStorage.setItem("UN",doc.get('fullName'))
    sessionStorage.setItem("UT",doc.get("typ"))
    sessionStorage.setItem("UE",doc.get("email"))
    sessionStorage.setItem("UP",doc.get("pas"))
  })
}
Updateuser(id:string|null, name:string)
{
  if(id!=null)
  {
    if(name!="")
    {
    const ref =doc(getFirestore(),"Users",id)
    const data={
      fullName:name
    }
      updateDoc(ref,data).then(()=>{
        sessionStorage.setItem("UN",name)
        alert("Update the name successfully")
        this.router.navigate(["/Home"])
      })
    }
    else
    {
      alert("the data not correct")
    }
  }
  else
  {
    alert("You must log in")
    this.router.navigate(["/Login"])
  }
}
getAllUsers1(id:string|null)
{
  let allU = this.Fir.collection('/Users/'+id).snapshotChanges() ;
    return allU
}
async PasswordReset(passwordReset: string) {
  try {
    await this.auth.sendPasswordResetEmail(passwordReset);
    alert('Password reset email sent successfully')
    this.router.navigate(["/Login"])
  } catch (error: any) {
    console.error('Error sending password reset email:', error);
    // Check the error code to determine the specific error
    if (error.code === 'auth/user-not-found') {
      alert('User with this email does not exist')
    } else {
      alert('An error occurred while sending the password reset email')
    }
  }
}

}
