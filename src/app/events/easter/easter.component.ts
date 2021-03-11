import { Component, OnInit } from '@angular/core';
import { Station } from 'src/app/nativity/station.model';

@Component({
  selector: 'app-easter',
  templateUrl: './easter.component.html',
  styleUrls: ['./easter.component.css']
})
export class EasterComponent implements OnInit {

  constructor() { }

  stations = [
    new Station(
      1,
      "Welcome",
      [
       "You are about to enjoy a story that has been told and retold for two thousand years. The Nativity reveals something very special about God--that he was prepared to be with us and live among us. Imagine the stars in the sky, the countless constellations, the sprawling Solar System...and among it a little planet called Earth. God made all of those things, and all the people of our planet. Just over two thousand years ago, when we most needed him, God came down to be with us, to save us and show us how life should be lived. He could have chosen anywhere to be his home. He could have built a palace for himself. But he didn’t. God chose to send his Son to be born among the forgotten, the overlooked and the poorest. So let’s see the story of how Jesus came to be with us, an event that is still transforming lives to this day.",
       "The story opens with a young woman in her home – Mary. Unless you look a bit deeper, there is nothing particularly remarkable about Mary. She was from a town called Nazareth and was engaged to be married to Joseph. But, to God, she was very important. So important that God sent an angel down from heaven with a message for her. The angel told Mary that she was very special and that God was with her. The angel told her not to be afraid. She would give birth to a son. She was to call him Jesus, and he would be called the Son of the Most HIgh."
    ],
      "camels.png",
      'Station 1.mp3'
    ),
    new Station(
      2,
      "Little Town of Bethlehem",
      [
        "Mary was excited about the news of the baby and she told Joseph all about it.",
        "But the Roman emperor, Ceasar Augustus, who ruled over the land, sent an order saying he wanted to count every single person in the country. So everyone – including Mary and Joseph – had to go back to their hometown to be registered. Joseph came from a faraway town called Bethlehem. Because Mary was engaged to be his wife, she went with him to Bethlehem.",
        "During the journey, Mary was very nearly ready to give birth to her baby. Although tired and weary, Mary and Joseph travelled for many miles. They went from Nazareth in Galilee to Judea and then to Bethlehem."
    ],
      "walk.jpg",
      'Station 2.mp3'
    ),
    new Station(
      3,
      "Silent Night",
      [
        "When they arrived in Bethlehem, they knocked on every door in the town, looking for a place to stay--but everywhere was full of people. Each time they were given the same answer. Lots of people had come down to be counted, so the whole town was full. Mary and Joseph nearly gave up, but then they tried the very last guest house.",
        "“There is no room. All my rooms are full. All I can offer is my stable out in the back, where we keep all the animals.”"

      ],
      "little.jpeg",
      'Station 3.mp3'
    ),
    new Station(
      4,
      "The Manger",
      [
        "It was a very difficult place to bring a new life into the world. Dirty, smelly and unhygienic. But Mary and Joseph made the best of it. When the baby came, they wrapped little Jesus in swaddling cloths. They didn’t have anything to put him in, so they placed the Son of God in a manger – a trough that is used to feed animals. This probably not what Mary was expecting. The angel said Jesus would be called the Son of the Most High. But as she looked at the sleeping baby in the manger, she knew that he was a precious gift. ",
    ],
      "joy.jpg",
      'Station 4.mp3'
    ),
    new Station(
      5,
      "Shepherds and Angels",
      [
        'Meanwhile, in some fields nearby, it was night time and a group of shepherds were keeping watch over their flocks. These shepherds were just ordinary people going about their daily lives. They were not considered very important. Nobody took much notice of them. So they were surprised, to say the least, to see an angel of the Lord appear in front of them. The glory of God shone all around the shepherds and they were terrified. The angel spoke to them.',
        '“Fear not: for, behold, I bring you good tidings of great joy, which shall be to all people.  For unto you is born this day in the city of David, a Savior, which is Christ the Lord. And this shall be a sign unto you; Ye shall find the babe wrapped in swaddling cloths, lying in a manger.” ',
        'And suddenly the angel was joined by a huge group of angels, called the heavenly host.',
        '“Glory to God in the highest, and on earth peace, good will toward men.”',
        'The shepherds wondered what they should do next. They decided the best thing was to go to Bethlehem to see what had happened. So they hurried off to seek Mary and Joseph and the baby.',
      ],
      "shepherds.jpg",
      'Station 5.mp3'
    ),
    new Station(
      6,
      "The Wisemen",
      [
        'Some time later there came wise men from the east to Jerusalem. They asked, ',
        '“Where is the baby who was born King of the Jews? We have seen his star in the east and have come to worship him.” ',
        'When Herod the king had heard these things, he was troubled. He sent the wise men to Bethlehem and said, ',
        '“Go and search diligently for the young child; and when you have found him, bring me word again, that I may come and worship him also."',
        'When they heard the king, they departed and the star, which they saw in the east, went before them until it came and stood over where the young child was. When they saw the star, they rejoiced with great joy. The wise men saw the child and they worshipped him. They brought gifts of gold, frankincense, and myrrh and presented them to him.',
        'End',
        'Each of them gave Jesus a special gift, and that is why we give gifts at Christmas. They went home even wiser men, realizing that precious things are worth far more than money and are not always found in the richest places. They realized that they should offer their wealth to Jesus, the Son of God, who was born into poverty and was a friend of poor and needy people.',
        'Thank you for spending time with us celebrating God’s gift to us all. We would love for you to worship with us on Sunday mornings at 10:00am. For any questions, please call 540-886-2317. Merry Christmas!'
      ],
      "wisemen.jpeg",
      'Station 6.mp3'
    ),
    /*new Station(
      7,
      "Joy to the World",
      [
        "Thank you for spending time with us this afternoon celebrating God’s gift to us all. We would love for you to worship with us on Sunday mornings at 10:00AM. For any questions, please call 886-2317 and Merry Christmas!"
      ],
      "joy.jpg",
      'Station 6.mp3'
    ),*/
  ];

  current:Station = this.stations[0];
  start = false;

  next(){
    let id = this.current.id + 1;
    if(id > this.stations.length){
      id = 1;
    }console.log("setting id");

    this.current = this.stations[id - 1];
    this.scrollToCurrent();

  }

  previous(){
    let id = this.current.id - 1;
    if(id > this.stations.length){
      id = 1;
    }
    else if(id === 0){
      id = this.stations.length;
    }

    this.current = this.stations[id - 1];
    this.scrollToCurrent();

  }

  scrollToCurrent(){
    let el = document.getElementById("current");
    el.scrollIntoView();
  }

  setCurrent(id){
    this.current = this.stations[id - 1];
    this.scrollToCurrent();
  }
  playAudio(path){
    console.log('in player')
    let sound = "../../assets/audio/"+path;
    ( new Audio(sound) ).play()
  }

  ngOnInit(): void {
  }

}
