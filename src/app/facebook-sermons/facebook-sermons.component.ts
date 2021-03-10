import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Video } from '../sermons/video.model';
import { FacebookService } from '../services/facebook.service';
import * as moment from 'moment';

@Component({
  selector: 'app-facebook-sermons',
  templateUrl: './facebook-sermons.component.html',
  styleUrls: ['./facebook-sermons.component.css']
})
export class FacebookSermonsComponent implements OnInit {

  private videoSubscription: Subscription;

  constructor(private facebookservice: FacebookService) { }

  videos:Video[] = [];
  urlPath = "https://www.facebook.com/video.php?v=";

  ngOnInit(): void {

    this.videoSubscription = this.facebookservice.getVideoListener()
    .subscribe((videos:Video[])=>{
        console.log("videos", videos)
        this.videos = videos;
    });
    this.facebookservice.getVideos();
  }

  ngOnDestroy(): void {
    this.videoSubscription.unsubscribe();
  }

  videoUrl(id:string){
    return this.urlPath+id;
  }

  formatDate(date:string){
    return moment(date).format('MMMM Do YYYY');
  }


}
