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
        });
    });

    this.sheetService.getItems(2);

    /*this.events = [
      {
        name:"Nativity",
        description:[
          "Pick Up from 4pm until 6 pm",
          "Adults $10, Children 5-12 $6, Children under 4 free!!",
          "To order call: 540-886-2317 Or Email: stpaulumc2@gmail.com"
        ],
        picture:null,
        facebook:"https://www.facebook.com/video.php?v=426289478528084",
        date:"2021-02-20",
        time:"4pm until 6",
        raindate:null,
      },
      {
        name:"Spaghetti Dinner",
        description:[
          "Pick Up from 4pm until 6 pm",
          "Adults $10, Children 5-12 $6, Children under 4 free!!",
          "To order call: 540-886-2317 Or Email: stpaulumc2@gmail.com"
        ],
        picture:"../../assets/img/spaghetti.jpg",
        facebook:null,
        date:"2021-02-20",
        time:"4pm until 6",
        raindate:null,
      },
      {
        name:"Journey to the Cross",
        description:[
          "Come join us for a drive through presentation of Jesus's journey to the cross. There will be live animals and actors illustrating Jesus's journey to the cross",
        ],
        picture:"../../assets/img/journey-950.jpg",
        facebook:null,
        date:"2021-03-28",
        raindate:null,
        time:"From 2pm until 4:30"
      },
      {
        name:"Combined Good Friday Worship",
        description:[
          "Come join us for a Combined Good Friday Worship at St John's UMC",
        ],
        picture:"../../assets/img/events/easter/friday.jpeg",
        facebook:null,
        date:"2021-04-02",
        raindate:null,
        time:"Starts at 7:30pm"
      },
      {
        name:"Easter Sunrise Worship",
        description:[
          "Come join us for a Sunrise Worship at St. Paul's UMC followed by regular Easter Worship at 10AM",
        ],
        picture:"../../assets/img/events/easter/sunrise.jpg",
        facebook:null,
        date:"2021-04-04",
        raindate:null,
        time:"Starts at 6:30 AM"
      },
      {
        name:"MORE 2 GO",
        description:[
          "St. Paul will be offering meals to go each week on Wednesday nights. Pickup is between 5-6pm at the kitchen located in the back parking lot. Please place your oders by Tuesday of each week by calling the church office number locted below",
          "<strong>Prices:</strong> $8 per adult and $4 per child (age 6 and under free).",
          "Contact the church office at <a href='tel:540-886-2317'>540-886-2317</a> for more information",
          "<strong>Upcoming Menu:</strong>",
          "April 28th - Hamburger Steak with Gravy, Mac and Cheese, Green Beans, Rolls & Dessert",
          "May 5th - Ziti with Meat Sauce and Meatballs, Roll & Dessert",
          "May 12th -  Meatloaf, Macaroni Salad, Green Beans, Rolls & Dessert",
          "May 19th - Hamburger Steak with Gravy, Mac and Cheese, Green Beans, Rolls & Dessert"
        ],
        picture:"../../assets/img/events/easter/more.jpg",
        facebook:null,
        date:"2021-05-19",
        raindate:"2021-05-19",
        time:""
      },
      {
        name:"MORE 2 GO",
        description:[
          '<div>St. Paul will be offering meals to go each week on Wednesday nights. Pickup is between 5-6pm at the kitchen located in the back parking lot. Please place your oders by Tuesday of each week by calling the church office number locted below</div><div>&nbsp;</div><div><div><strong>Prices:</strong> $8 per adult and $4 per child (age 6 and under free).</div><div>&nbsp;</div><div>Contact the church office at&nbsp;<a href="tel:540-886-2317">540-886-2317</a>&nbsp;for more information</div><div>&nbsp;</div><div><strong>Upcoming Menu:</strong></div><div>&nbsp;</div><div><div><div>April 28th -&nbsp;Hamburger Steak with Gravy, Mac and Cheese, Green Beans, Rolls &amp; Dessert</div><div>&nbsp;</div><div><div><div>May 5th - Ziti with Meat Sauce and Meatballs, Roll &amp; Dessert</div><div>&nbsp;</div><div><div><div>May 12th - Meatloaf, Macaroni Salad, Green Beans, Rolls &amp; Dessert</div><div>&nbsp;</div><div><div><div>May 19th - Hamburger Steak with Gravy, Mac and Cheese, Green Beans, Rolls &amp; Dessert</div></div></div></div></div></div></div></div></div></div>'
        ],
        picture:"../../assets/img/events/easter/more.jpg",
        facebook:null,
        date:"2021-05-19",
        raindate:"2021-05-19",
        time:""
      }

    ]*/
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
