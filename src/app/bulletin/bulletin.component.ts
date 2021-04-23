import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { sheetService } from '../services/sheetService';

@Component({
  selector: 'app-bulletin',
  templateUrl: './bulletin.component.html',
  styleUrls: ['./bulletin.component.css']
})
export class BulletinComponent implements OnInit, OnDestroy {

  constructor(private sheetService: sheetService) { }

  private itemSubscription: Subscription;

  latestBulletin:string = null;

  ngOnInit(): void {

    this.itemSubscription = this.sheetService.getBullitenListener()
    .subscribe((items:Array<{Url:string}>)=>{
        console.log("bulliten items", items)
        if(items.length > 0){
          this.latestBulletin = items[0].Url;
        }


    });
    this.sheetService.getBulletin();
  }

  ngOnDestroy(): void {
    this.itemSubscription.unsubscribe();
  }

}
