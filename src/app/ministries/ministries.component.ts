import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ministries',
  templateUrl: './ministries.component.html',
  styleUrls: ['./ministries.component.css']
})
export class MinistriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  url(url:string){
    return url;
  }

}
