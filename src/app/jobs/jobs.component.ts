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
      {
        title: "Director of Youth Ministries",
        description:["job 1"],
        link:"https://drive.google.com/file/d/1l3BqH8XInf7lM1wbY5KyaWzBMnCODxQF/view?usp=sharing",
      }
    ]
  }

}
