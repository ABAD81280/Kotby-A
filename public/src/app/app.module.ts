import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { UsersComponent } from './users/users.component';
import { TestComponent } from './test/test.component';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AddBooksComponent } from './add-books/add-books.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { collection, query, where, Firestore } from "firebase/firestore";
import { UpdateUserComponent } from './update-user/update-user.component';
import { getStorage } from 'firebase/storage';
import { AdmenComponent } from './admen/admen.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    TestComponent,
    AddBooksComponent,
    HomeComponent,
    LoginComponent,
    UpdateUserComponent,
    AdmenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    //provideStorage(() => getStorage()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  providers: [
    ScreenTrackingService,UserTrackingService,
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
