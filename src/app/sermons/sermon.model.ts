export class Sermon {
    constructor(
        public id:number, 
        public title:string,
        public description:string,
        public date:string,
    ){}

    facebookUrl(){
        return "https://www.facebook.com/video.php?v="+this.id
    }

    embededFaceBook(){
        //`${commandName} ${randomizer.getColor()} ${randomizer.getAnimal()} ${targetListType}`,
        return `
        <div 
            class="fb-video" 
            data-href="https://www.facebook.com/video.php?v=${this.id}/" 
            data-show-text="false" data-width="500"
        >
        
        <blockquote 
            cite="https://developers.facebook.com/stpaulsumcstaunton/videos/${this.id}/" 
            class="fb-xfbml-parse-ignore"
        >
        <a href="https://developers.facebook.com/stpaulsumcstaunton/videos/${this.id}/">${this.date}</a>
        <p>${this.title}</p>Posted by <a href="https://www.facebook.com/stpaulsumcstaunton/">St. Paul&#039;s United Methodist Church</a> on ${this.date}</blockquote>
    </div>
        `
    }

    embeded2(){
        return ` <div class="fb-video"
        data-href="https://www.facebook.com/video.php?v=3273967092712389"
        data-width="500"
        data-allowfullscreen="true"></div>`;
    }
}