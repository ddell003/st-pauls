import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { sheetService } from '../services/sheetService';

@Component({
  selector: 'app-news-letters',
  templateUrl: './news-letters.component.html',
  styleUrls: ['./news-letters.component.css']
})
export class NewsLettersComponent implements OnInit, OnDestroy {

  constructor(private sheetService: sheetService) { }

  private itemSubscription: Subscription;

  latestBulletin:string = null;

  newsItems = [];

  ngOnInit(): void {

    this.itemSubscription = this.sheetService.getNewsListener()
    .subscribe((items:Array<{Url:string}>)=>{
        console.log("news items", items)
        this.newsItems = items;

    });
    this.sheetService.getNews();
  }

  ngOnDestroy(): void {
    this.itemSubscription.unsubscribe();
  }

}
