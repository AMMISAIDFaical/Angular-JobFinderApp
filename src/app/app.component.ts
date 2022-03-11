import { ElementRef } from '@angular/core';
import { Component } from '@angular/core';
 import * as firebase from 'firebase';
   @Component({
  selector: 'app-root',
  template: `
  <nav style="width: 100%;margin: 0px; padding: 0px;" class="navbar navbar-expand-lg navbar-light bg-light">
  <a style="padding-left: 10px;" routerLink = 'search' class="nav-link" class="navbar-brand"> Home </a>

  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a style="width: 150px;" routerLink = '/employer' class="nav-link">Worker Space</a>
      </li>
      <li class="nav-item">
        <a style="width: 150px;" routerLink = '/company'class="nav-link">Company Space</a>
      </li>
      <li  class="nav-item">
        <a style="margin-left:700%; width: 140px;"  routerLink = '/signup'class="nav-link">Sign Up</a>
      </li>
      <li  class="nav-item">
        <a style="margin-left:500%;padding-left:50px; width: 130px;" routerLink = '/signin'class="nav-link">Sign In</a>
      </li>
    </ul>
  </div>
</nav>
  <router-outlet><router-outlet>
`
})

export class AppComponent {

  constructor(private elementRef: ElementRef){
    var firebaseConfig = {
      apiKey: "AIzaSyA3K0pqPoek13IdA6pxUN5-yFDd32e6rko",
      authDomain: "myjobfinderwebsite.firebaseapp.com",
      databaseURL: "https://myjobfinderwebsite-default-rtdb.firebaseio.com",
      projectId: "myjobfinderwebsite",
      storageBucket: "myjobfinderwebsite.appspot.com",
      messagingSenderId: "2430338136",
      appId: "1:2430338136:web:36fcfa7423936cb0cd362d",
      measurementId: "G-BFCN28HY4L"
    };
    // Initialize Firebase
    firebase.default.initializeApp(firebaseConfig);
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#white ';
 }


  title: string = 'job Finder';



}
