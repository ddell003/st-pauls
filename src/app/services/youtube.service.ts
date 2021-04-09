import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import nodefetch from 'node-fetch';
import { Subject } from 'rxjs';
import { Video } from '../yt-videos/video.model';
import {DomSanitizer} from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private videosLoaded = new Subject<Video[]>();

  private url = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3DUCB35_BlFjZjtpzsvC11GmaA";


  videos = [];

  constructor(private http: HttpClient, private sanitizer:DomSanitizer) { }

  getVideoListener() {
    return this.videosLoaded.asObservable();
  }

  getUrl(url){
    console.log(url);
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);

  }

  getVideos(){
    console.log("in the youtube service");


    this.http.get(this.url, {responseType: 'text'})
      .subscribe((body)=> {
        const formattedText = body
        const rawVideos = JSON.parse(body).items;


        for(let i = 0; i < rawVideos.length; i++){
            const current = rawVideos[i];

            const id = current.link.substr(current.link.indexOf("=") + 1);

            const newVideo:Video  = {
              id,
              title:current.title,
              date:current.pubDate,
              author:current.author,
              link:this.getUrl("https://youtube.com/embed/" + id),
              description:current.description,
              thumbnail:current.thumbnail,
            }

            this.videos.push(newVideo);
        }


          console.log("youtube service", this.videos)
          this.videosLoaded.next([...this.videos]);
      },
      error => {
        console.log("error", error)
      },);


  }

}



