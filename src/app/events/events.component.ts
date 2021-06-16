import { Component, OnDestroy, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { sheetService } from '../services/sheetService';
import {formatImgUrl} from '../services/helpers';
import { Event, RawEvent } from './event.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit, OnDestroy {

  public events = [];

  private itemSubscription: Subscription;

  constructor(private sheetService: sheetService) { }

  ngOnInit(): void {
    var todaysDate = moment().format("YYYY-MM-DD");
    console.log("date - "+todaysDate)

    this.itemSubscription = this.sheetService.getSheetListener()
    .subscribe((items:[])=>{
        console.log("event items", items)

        this.events = items.map((item:RawEvent)=> {
          return {
            name:item.name,
            description:[item.description],
            picture:formatImgUrl(item.pictureUrl),
            embeded: (item.hasOwnProperty("embededLink")) ? item.embeded : null,
            date:item.date,
            time:(item.hasOwnProperty("time")) ? item.time : null,
            raindate:(item.hasOwnProperty("raindate")) ? item.raindate : null,
        }
        })
        .filter(value=>{
          let show = true;
          if(value.raindate){
            const rainDate = moment(value.raindate).add(1, 'day').format("YYYY-MM-DD");
            show = (rainDate >= todaysDate)
          }
          else{
            const eventDate = moment(value.date).add(1, 'day').format("YYYY-MM-DD");
            show = (eventDate >= todaysDate)
          }
          console.log(value, show)
          return show;
        });
    });

    this.sheetService.getItems(2);

    this.events.filter(value=>{
      let show = true;
      if(value.raindate){
        const rainDate = moment(value.raindate).add(1, 'day').format("YYYY-MM-DD");
        show = (rainDate >= todaysDate)
      }
      else{
        const eventDate = moment(value.date).add(1, 'day').format("YYYY-MM-DD");
        show = (eventDate >= todaysDate)
      }
      console.log(value, show)
      return show;
    })

    console.log("events", this.events);
  }

  ngOnDestroy():void {
    this.itemSubscription.unsubscribe();
  }

  formatDate(date:string){
    return moment(date).format('dddd, MMMM Do, YYYY');
  }

}
