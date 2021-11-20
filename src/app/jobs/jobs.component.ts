import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobs:{
    title:string,
    description: string[],
    link:string
  }[] = [];

  constructor() { }

  ngOnInit(): void {
    this.jobs = [
      // {
      //   title: "Nursery Worker",
      //   description:["job 1"],
      //   link:"https://docs.google.com/document/d/18UL01Yy3XLiufaWYFHAyaY-IDI0yT2TD/edit?usp=sharing&ouid=107893894532998854003&rtpof=true&sd=true",
      // }
    ]
  }

}
