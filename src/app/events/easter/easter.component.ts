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
      "Creation and Fall",
      [
        "Scripture:",
        "Genesis 1:31 God saw everything that he had made, and behold, it was very good.",
        "Romans 5:12 Sin entered the world through one man and death through sin.",
        "God made the whole world. The earth, the sun, the stars, the land and oceans, the plants and animals. And all of it was good! Then God made people too in his own image. They would be his children and would be happy forever in the good world God had made.",
        'God gave them only one rule. “Do not eat from this tree.” But the first man and woman didn’t trust God. They ate from that tree anyway. As soon as they did, they realized they were naked. They were ashamed and sad for the first time. They hid from God and blamed each other. With them, all of God’s good world became to break and decay. Death entered the world through their sin. '
      ],
      "creation.png",
      'Station 2.mp3'
    ),
    new Station(
      2,
      "Christ Arrives",
      [
        "Scripture: John 12: 14-15",
        'Jesus found a young donkey and sat on it, as it is written: ... your king is coming, seated on a donkey’s colt.',
        "God would not leave the world broken and dying. Even though people kept on sinning, they kept on ignoring God and hurting each other, God had a  plan to save them. ",
        "God sent his own son, born of a virgin, to live as a human being. His son, Jesus, lived perfectly in sync with God - the way Adam and Eve should have. He loved people, healed their illnesses and he forgave all their sins. Jesus is God and Man at the same time. He is the real King of the whole world and yet ...he came to claim his throne on a humbly, on a donkey."


      ],
      "donkey.jpg",
      'Station 3.mp3'
    ),
    new Station(
      3,
      "The Last Supper",
      [
        "Scripture: Mark 14: 22",
        'Jesus took bread, and when he had given thanks, he broke it and gave it to his disciples, saying, “Take it; this is my body.”',
        "Jesus knew he would die as a sacrifice to forgive the sins of the humans. His perfect life and death would put an end to the horrible consequence of sin once and for all. ",
        "The night before, he celebrated the Passover holiday with his disciples, his best friends. Jesus told them what was about to happen, that he was about to die. He told them that his body would be broken like bread and his blood poured out like wine. He would be their sacrifice so that they could once more live in friendship and happiness with God.  ",
        "His friends all promised that they would die with him rather than ever leave him.",
    ],
      "supper.jpg",
      'Station 4.mp3'
    ),
    new Station(
      4,
      "The Garden & Betrayal",
      [
        "Scripture:",
        'Mark 14:36 - “Abba,[f] Father,” he said, “everything is possible for you. Take this cup from me. Yet not what I will, but what you will.”',
        'Mark 14:44 the betrayer had arranged a signal with them: “The one I kiss is the man; arrest him',
        'Jesus went to pray the night before his death. He prayed, “Abba,Father, everything is possible for you. Take this cup from me. Yet not what I will, but what you will.” Jesus obeyed God in everything. No matter the cost.',
        'Judas, one of Jesus best friends, betrayed Jesus. He lead people who wanted to kill Jesus to where he was praying.  Judas had arranged a signal with them: “The one I kiss is the man; arrest him.” And so they arrested him and lead him away. ',

      ],
      "garden.jpg",
      'Station 5.mp3'
    ),
    new Station(
      5,
      "The Denial",
      [
        "Scripture:",
        'Mark 14:71 ',
        '[Peter] swore to them “I don’t know this man you’re talking about.”',
        'After Jesus was arrested, all his disciples ran away. Peter, one of his best friends, followed him to the trial. A servant girl asked him if he was with Jesus and Peter said no. She asked him 3 times and every time Peter said no, I don’t know Jesus.',
        'A rooster crowed. ',
        '“Then Peter remembered the word Jesus had spoken: “Before the rooster crows, you will disown me three times.” And he went outside and wept bitterly.”  Matthew 26:75'

      ],
      "peter.jpg",
      'Station 6.mp3'
    ),
    new Station(
      6,
      "Condemned - Pilate",
      [
        "Scripture: Mark 15:13-14",
        'Crucify him!” they shouted. 14 “Why? What crime has he committed?” asked Pilate. But they shouted all the louder, “Crucify him!”',
        'The Jewish leaders wanted to kill Jesus. They took him the the governor Pontius Pilate and said Jesus’ wanted to be a king and overthrow the government.',
        "Pilate questioned Jesus and had him beaten. The guards mocked him and put a crown of thorns on him. But they didn’t find any evidence of a crime. Jesus had never sinned. He never did anything wrong.",
        'But the people shouted and shouted so much that Pilate ordered his soldiers to execute Jesus anyway.',



      ],
      "trial.jpg",
      'Station 6.mp3'
    ),
    new Station(
      7,
      "Carrying The Cross",
      [
        "Scripture: John 19:17",
        'Carrying his own cross, he went out to the place of the Skull ',
        'So the soldiers took charge of Jesus. 17 Carrying his own cross, he went out to the place of the Skull (which in Aramaic is called Golgotha). There they crucified him, and with him two others—one on each side and Jesus in the middle.',
        'Pilate had a notice prepared and fastened to the cross. It read: jesus of nazareth, the king of the jews. ',

      ],
      "carrying.jpeg",
      'Station 6.mp3'
    ),
    new Station(
      8,
      "Death",
      [
        "Scripture:",
        "John 19:30",
        'Jesus said, “It is finished.” With that, he bowed his head and gave up his spirit.',
        'Mark 15:24-41',
        'They crucified him. Dividing up his clothes, [the soldiers] cast lots to see what each would get…',
        '27 They crucified two rebels with him, one on his right and one on his left. [29 Those who passed by hurled insults at him, shaking their heads...“He saved others,” they said, “but he can’t save himself! 32 Let this Messiah, this king of Israel, come down now from the cross, that we may see and believe.” ',
        '33 At noon, darkness came over the whole land until three in the afternoon. 34 And at three in the afternoon Jesus cried out in a loud voice, “Eloi, Eloi, lema sabachthani?” (which means “My God, my God, why have you forsaken me?”) 337 With a loud cry, Jesus breathed his last.',
      ],
      "crosses.jpg",
      'Station 6.mp3'
    ),
    new Station(
      9,
      "Buried",
      [
        "Scripture: John 19:38-41",
        '38 Later, Joseph of Arimathea asked Pilate for the body of Jesus. Now Joseph was a disciple of Jesus, but secretly because he feared the Jewish leaders. With Pilate’s permission, he came and took the body away. 39 He was accompanied by Nicodemus, the man who earlier had visited Jesus at night. Nicodemus brought a mixture of myrrh and aloes, about seventy-five pounds.[e] 40 Taking Jesus’ body, the two of them wrapped it, with the spices, in strips of linen. This was in accordance with Jewish burial customs. 41 At the place where Jesus was crucified, there was a garden, and in the garden a new tomb, in which no one had ever been laid. 42 Because it was the Jewish day of Preparation and since the tomb was nearby, they laid Jesus there.',
      ],
      "tomb.jpg",
      'Station 6.mp3'
    ),
    new Station(
      10,
      "Resurrection",
      [
        "Scripture: Matthew 28:1-10",
        "Three days passed after Jesus died.",
        'Mary Magdalene and the other Mary went to look at the tomb. ',
        '2 There was a violent earthquake, for an angel of the Lord came down from heaven and, going to the tomb, rolled back the stone and sat on it. 3 His appearance was like lightning, and his clothes were white as snow. 4 The guards were so afraid of him that they shook and became like dead men.',
        '5 The angel said to the women, “Do not be afraid, for I know that you are looking for Jesus, who was crucified. 6 He is not here; he has risen, just as he said. Come and see the place where he lay. 7 Then go quickly and tell his disciples: ‘He has risen from the dead and is going ahead of you into Galilee. There you will see him.’ ',
        '8 So the women hurried away from the tomb, afraid yet filled with joy, and ran to tell his disciples. 9 Suddenly Jesus met them. “Greetings,” he said. They came to him, clasped his feet and worshiped him. 10 Then Jesus said to them, “Do not be afraid. Go and tell my brothers to go to Galilee; there they will see me.”        '

      ],
      "empty.png",
      'Station 6.mp3'
    ),
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
