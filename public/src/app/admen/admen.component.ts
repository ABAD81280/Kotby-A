import { Component } from '@angular/core';
import { Router } from "@angular/router"
@Component({
  selector: 'app-admen',
  templateUrl: './admen.component.html',
  styleUrls: ['./admen.component.css']
})
export class AdmenComponent {
  constructor(public router:Router){this.Admen()}
Admen()
{
  const t = sessionStorage.getItem("UT")
  if(t!="X")
  {
    this.router.navigate(["/Home"])
  }
}
GotoAddBook()
{
  this.router.navigate(["/addBook"])
}
}
