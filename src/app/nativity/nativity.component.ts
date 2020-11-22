import { Component, OnInit } from '@angular/core';
import { Station } from './station.model';

@Component({
  selector: 'app-nativity',
  templateUrl: './nativity.component.html',
  styleUrls: ['./nativity.component.css']
})
export class NativityComponent implements OnInit {

  constructor() { }

  stations = [
    new Station(
      1,
      "Welcome",
      [
       "You are about to enjoy a story that has been told and retold for two thousand years. The Nativity reveals something very special about God--that he was prepared to be with us and live among us. Imagine the stars in the sky, the countless constellations, the sprawling Solar System...and among it a little planet called Earth. God made all of those things, and all the people of our planet. Just over two thousand years ago, when we most needed him, God came down to be with us, to save us and show us how life should be lived. He could have chosen anywhere to be his home. He could have built a palace for himself. But he didn’t. God chose to send his Son to be born among the forgotten, the overlooked and the poorest. This is the story of how God came to be with us.",
       "God sent an angel down from heaven with a message for Mary. The angel told Mary that she was very special and that God is with her. The angel told her not to be afraid. She will give birth to a son. She is to call him Jesus, and he will be called the Son of the Most high"
       
    ],
      "camels.png"
    ),
    new Station(
      2,
      "The Walk",
      [
        "….so we read in the Bible, the book of Luke, Chapter 2",
        "1 And it came to pass in those days, that there went out a decree from Cæsar Augustus, that all the world should be taxed. 3 And all went to be taxed, every one into his own city. 4 And Joseph also went up from Galilee, out of the city of Nazareth, into Judæa, unto the city of David, which is called Bethlehem; (because he was of the house and lineage of David:)"
    ],
      "walk.jpg"
    ),
    new Station(
      3,
      "Little Town of Bethleham",
      [
        "Joseph went there to register with Mary, who was pledged to be married to him and was expecting a child. During the journey, Mary was very nearly ready to give birth to her baby. Although tired and weary, Mary and Joseph travelled for many miles. When they arrived in Bethlehem, they knocked on every door in the town, looking for a place to stay--but everywhere was full of people. Each time they were given the same answer. Lots of people had come down to be counted, so the whole town was full."
      ],
      "little.jpeg"
    ),
    new Station(
      4,
      "The Manger",
      ["some text"],
      "manger.jpg"
    ),
    new Station(
      5,
      "Shepherds and Angels",
      ["some text"],
      "shepherds.jpg"
    ),
    new Station(
      6,
      "The Wisemen",
      ["some text"],
      "wisemen.jpeg"
    ),
    new Station(
      7,
      "Joy to the World",
      ["some text"],
      "joy.jpg"
    ),
  ];

  current:Station = this.stations[0];

  next(){
    let id = this.current.id + 1;
    if(id == this.stations.length){
      id = 1;
    }console.log("setting id");

    this.current = this.stations[id - 1];
    this.scrollToCurrent();
    
  }

  scrollToCurrent(){
    let el = document.getElementById("current");
    el.scrollIntoView();
  }

  setCurrent(id){
    this.current = this.stations[id - 1];
  }

  ngOnInit(): void {
  }

}
