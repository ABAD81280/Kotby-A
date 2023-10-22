import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { AdmenComponent } from './admen/admen.component';

const routes: Routes = [{path:"Add",component:UsersComponent},
{path:"SignIn",component:UsersComponent},
{path:"Login",component:LoginComponent},
{path:"Home",component:HomeComponent},
{path:"UpdateU",component:UpdateUserComponent},
{path:"addBook",component:AddBooksComponent},
{path:"admen",component:AdmenComponent},
{path:"",component:HomeComponent},
{path:"pas",component:TestComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
