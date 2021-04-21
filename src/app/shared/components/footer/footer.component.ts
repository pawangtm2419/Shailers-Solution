import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentYearValue: any;

  constructor() { }

  ngOnInit(): void {
    this.currentYear();
  }

  currentYear(){
    this.currentYearValue= new Date().getFullYear();
  }
}
