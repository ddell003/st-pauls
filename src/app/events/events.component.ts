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
        raindate:"2021-04-2",
        time:"From 4pm until 6"
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
