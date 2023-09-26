import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  year: number;
  constructor() { }

  ngOnInit(): void {
    this.yearActually();
  } 

  yearActually(): void{
    const currentTime = new Date();
    this.year = currentTime.getFullYear();
  }
}
