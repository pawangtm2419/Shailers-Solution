import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-admin-side-navbar',
  templateUrl: './admin-side-navbar.component.html',
  styleUrls: ['./admin-side-navbar.component.css']
})
export class AdminSideNavbarComponent implements OnInit {
  @ViewChild('sideNavBar') sideNavBar!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  openSideNav() {
    let tagName = this.sideNavBar.nativeElement.classList;
    if (tagName.contains('close')) {
      tagName.remove('close')
    } else {
      tagName.add('close')
    }
  }

  logOut() {
   
    if (window.localStorage) {
      window.localStorage.removeItem('user_type');
      window.localStorage.clear();
 
    }
  }
}
