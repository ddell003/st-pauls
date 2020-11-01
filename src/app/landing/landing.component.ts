import { Component, OnInit } from '@angular/core';

import '../../assets/js/active.js';
import { Sermon } from '../sermons/Sermon.model.js';
import { SermonCollection } from '../sermons/Sermons.collection.js';

declare  var jQuery:  any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
 
export class LandingComponent implements OnInit {

  constructor() { }

  sermons:any = [];

  url(url:string){
    return url;
  }

  ngOnInit(): void {
    //jQuery.getScript('../../assets/js/active.js')
    this.sermons = SermonCollection.sermons.slice(0,3);
  }
}
