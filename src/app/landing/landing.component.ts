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

  nativityDate = false

  sermons:any = [];
  urlPath = "https://www.facebook.com/video.php?v=";

  url(url:string){
    return url;
  }

  videoUrl(id:string){
    return this.urlPath+id;
  }

  ngOnInit(): void {
    //jQuery.getScript('../../assets/js/active.js')
    this.sermons = SermonCollection.sermons.slice(0,12);

     /* // Create date from input value
      var inputDate = new Date("12/6/2020");

      // Get today's date
      var todaysDate = new Date();

      // call setHours to take the time out of the comparison
      if(inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
        this.nativityDate = true;
      }*/

  }

  facebookUrl(sermon: Sermon){
    return "https://www.facebook.com/video.php?v="+sermon.id
  }

  urlEncodeFb(sermon: Sermon){
    return encodeURI("https://www.facebook.com/video.php?v="+sermon.id)
  }

}
