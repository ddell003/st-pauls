import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  public events = [];

  constructor() { }

  ngOnInit(): void {
    var todaysDate = moment().format("YYYY-MM-DD");
    console.log("date - "+todaysDate)

    this.events = [
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
          "April 7th - Ziti & Meatballs, Italian Green Beans, Rolls & Dessert"
        ],
        picture:"../../assets/img/events/easter/more.jpg",
        facebook:null,
        date:"2021-3-03",
        raindate:"2021-04-07",
        time:""
      }

    ].filter(value=>{
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

  formatDate(date:string){
    return moment(date).format('dddd, MMMM Do, YYYY');
  }

}
