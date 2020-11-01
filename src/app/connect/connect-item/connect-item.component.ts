import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-connect-item',
  templateUrl: './connect-item.component.html',
  styleUrls: ['./connect-item.component.css']
})
export class ConnectItemComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  private slug: string;
  text:string = "";
  photo:string = "";
  title:string = "";
  backgroundUrl:string = "../../../assets/img/connect.jpeg";

  ngOnInit(): void {
    console.log('in item')
    this.route.params.subscribe(params => {
      this.setItem(params['slug'])
    });
  }

  setItem(slug){
    console.log('setting slug') 
    this.slug = slug;
    
    if(slug == 'dinner-theater'){
      this.text = 
          "<p>March 24, 2020 <br>Celebration Choir/Celebrating 25 years                 <br>"+
          "Dear Celebration Family,<br><br>"+
      "It is with great sadness, that Celebration has had to postpone the Dinner Theater scheduled for April 24th and 25th 2020. With the COVID-19 virus forcing everything to shut-down, this was the only decision that could be made at this time. I know you share in our disappointment."+
      "<br> With this being our Silver Anniversary show, your response for tickets was overwhelming. What a special audience you are … celebrating with us these past 25 years."+
      "<br> It is our intention to schedule this Anniversary show for late this fall. Celebration will send out a new letter with a ticket order form, and all the details when we have a firm date. You can ck. our website for updates."+
      "<br> Philippines 4:6 tells us: 6 Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God."+
      "<br> Until we meet again, may God surround you with his Angels and the Peace of God be with you."+
      "<br>Blessings,<br><br>"+
      "Doug Harris- 540-487-0347/ doug.vipins@gmail.com or stpaulumc2@gmail.com"+
      "<br>Celebration Choir</p>";
      this.photo = '../../../assets/img/dinner-theater.jpg';
  }
  else if(slug == "community-prayer"){
      this.photo = '../../../assets/img/praying.jpg';
      this.text = "\
      <h3 style='color:blue' class='text-center'>COMMUNITY PRAYER TEAM meets every Tuesday at 12:30 pm in St. Paul’s Sanctuary</h3> \
      <p>As followers of Jesus Christ, prayer is the best way to communicate with God. </p> \
      <p>Our prayer team invites you to gather and pray for one another, the community, and our ministry.</p> \
      <h5>Daily prayer:</h5> \
      <ul> \
          <li class='bulletList'>gives an opportunity to share your life with God.  “Draw near to God and He will draw near to you”. James 4:8</li> \
          <li class='bulletList'>gives us the chance to express gratitude for the things in life that He provides  “I will give thanks to the Lord with my whole heart; I will recount all of your wonderful deeds”. Psalm 9:1\
</li> \
          <li class='bulletList'> allows us to confess of our sins and ask for repentance.  “I acknowledged my sin to you, and I did not cover my iniquity; I said, “I will confess my transgressions to the Lord, ”and you forgave the iniquity of my sin”. Psalm 32:5</li>\
          <li class='bulletList'>acknowledges that God is really in control of our lives.  “Yours, O Lord, is the greatness and the power and the glory and the victory and the majesty”.  I Chronicles 29:11</li>\
      </ul>\
      <p>If you have a question or a prayer concern, please contact the\
church office (540-886-2317).</p>";

  }
  else{
      this.text = "";
      this.photo = "";
  }

  this.title = slug.replace('-', ' ').toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
  
  }

}
