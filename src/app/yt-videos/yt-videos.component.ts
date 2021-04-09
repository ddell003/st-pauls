import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { YoutubeService } from '../services/youtube.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-yt-videos',
  templateUrl: './yt-videos.component.html',
  styleUrls: ['./yt-videos.component.css']
})
export class YtVideosComponent implements OnInit {

  private videoSubscription: Subscription;
  videos = [];
  previewLength = 4;

  constructor(private videoService: YoutubeService, private sanitizer:DomSanitizer) { }

  ngOnInit(): void {

    this.videoSubscription = this.videoService.getVideoListener()
    .subscribe((videos:[])=>{
        console.log("videos", videos)
        this.videos = videos;
    });
    this.videoService.getVideos();
  }

  getUrl(url){
    console.log(url);
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);

  }


}
