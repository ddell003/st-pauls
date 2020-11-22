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
      [
        "...so we continue in the scripture, Luke, Chapter 2",
        "5 To be taxed with Mary, his espoused wife, being great with child. 6 And so it was, that, while they were there, the time came for the baby to be born. 7 And she brought forth her firstborn son, and wrapped him in swaddling clothes, and laid him in a manger; because there was no room for them in the inn.",
    ],
      "manger.jpg"
    ),
    new Station(
      5,
      "Shepherds and Angels",
      [
        " 8 And there were in the same country shepherds abiding in the field, keeping watch over their flock by night. 9 And, lo, the angel of the Lord came upon them, and the glory of the Lord shone round about them: and they were sore afraid. 10 And the angel said unto them………",
        "\“Fear not: for, behold, I bring you good tidings of great joy, which shall be to all people.  For unto you is born this day in the city of David a Saviour, which is Christ the Lord. And this shall be a sign unto you; Ye shall find the babe wrapped in swaddling clothes, lying in a manger.\”",
        "13 And suddenly there was with the angel a multitude of the heavenly host praising God, and saying….. ",
        "Glory to God in the highest, and on earth peace, good will toward men.",
        "  The angels left and went up to heaven. The shepherds wondered what they should do next. They decided the best thing was to go to Bethlehem to see what had happened. So they hurried off to seek Mary and Joseph and the baby."
      ],
      "shepherds.jpg"
    ),
    new Station(
      6,
      "The Wisemen",
      [
        "Now when Jesus was born in Bethlehem of Judæa in the days of Herod the king, behold, there came wise men from the east to Jerusalem, 2 Saying, “ Where is he that is born King of the Jews? for we have seen his star in the east, and are come to worship him.” 3 When Herod the king had heard these things, he was troubled….7 Then Herod, when he had privily called the wise men, inquired of them diligently what time the star appeared. 8 And he sent them to Bethlehem, and said, “Go and search diligently for the young child; and when ye have found him, bring me word again, that I may come and worship him also.” 9 When they had heard the king, they departed; and, lo, the star, which they saw in the east, went before them, till it came and stood over where the young child was. 10 When they saw the star, they rejoiced with exceedingly great joy. 11 ¶And when they were come into the house, they saw the young child with Mary his mother, and fell down, and worshipped him: and when they had opened their treasures, they presented unto him gifts; gold, and frankincense, and myrrh."
      ],
      "wisemen.jpeg"
    ),
    new Station(
      7,
      "Joy to the World",
      [
        "Thank you for spending time with us this afternoon celebrating God’s gift to us all. We would love for you to worship with us on Sunday mornings at 10:00AM. For any questions, please call 886-2317 and Merry Christmas!"
      ],
      "joy.jpg"
    ),
  ];

  current:Station = this.stations[0];

  next(){
    let id = this.current.id + 1;
    if(id > this.stations.length){
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
