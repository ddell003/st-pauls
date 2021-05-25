import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import '../../assets/js/active.js';
import { Sermon } from '../sermons/sermon.model.js';
import { SermonCollection } from '../sermons/Sermons.collection.js';
import { Video } from '../sermons/video.model.js';
import { FacebookService } from '../services/facebook.service.js';
import * as moment from 'moment';

declare  var jQuery:  any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit, OnDestroy {

  private videoSubscription: Subscription;

  constructor(private facebookservice: FacebookService) { }

  nativityDate = false

  sermons:any = [];
  videos:Video[] = [];
  urlPath = "https://www.facebook.com/video.php?v=";

  url(url:string){
    return url;
  }

  videoUrl(id:string){
    return this.urlPath+id;
  }
  videoQuery(id){
    return "allowfullscreen=true&app_id=420275702288338&container_width=1110&href=https%3A%2F%2Fwww.facebook.com%2Fvideo.php%3Fv%3D"+id+"&locale=en_US&sdk=joey&width=500"
  }
  formatDate(date:string){
    return moment(date).format('MMMM Do YYYY');
  }

  ngOnInit(): void {
    //jQuery.getScript('../../assets/js/active.js')
    /*this.sermons = SermonCollection.sermons.slice(0,12);
    this.facebookservice.getVideos();
    this.videoSubscription = this.facebookservice.getVideoListener()
    .subscribe((videos:Video[])=>{
        console.log("videos", videos)
        this.videos = videos;
    });*/

     // Create date from input value
      var inputDate = new Date("03/28/2021");

      // Get today's date
      var todaysDate = new Date();

      // call setHours to take the time out of the comparison
      if(inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
        this.nativityDate = true;
      }

      //https://www.youtube.com/feeds/videos.xml?channel_id=UCB35_BlFjZjtpzsvC11GmaA

  }

  ngOnDestroy(): void {
    //this.videoSubscription.unsubscribe();
  }

}
