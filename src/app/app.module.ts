import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SermonsComponent } from './sermons/sermons.component';
import { NavagationComponent } from './navagation/navagation.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { StaffComponent } from './staff/staff.component';
import { MinistriesComponent } from './ministries/ministries.component';
import { PreschoolComponent } from './ministries/preschool/preschool.component';
import { MenComponent } from './ministries/men/men.component';
import { ServeComponent } from './ministries/serve/serve.component';
import { ConnectComponent } from './connect/connect.component';
import { ConnectItemComponent } from './connect/connect-item/connect-item.component';
import { LibraryComponent } from './library/library.component';
import { FbVideoComponent } from './fb-video/fb-video.component';
import { YouthComponent } from './ministries/youth/youth.component';
import { NativityComponent } from './nativity/nativity.component';
import { HttpClientModule } from '@angular/common/http';
import { EventsComponent } from './events/events.component';
import { FacebookSermonsComponent } from './facebook-sermons/facebook-sermons.component';
import { EasterComponent } from './events/easter/easter.component';
import { YtVideosComponent } from './yt-videos/yt-videos.component';

@NgModule({
  declarations: [
    AppComponent,
    SermonsComponent,
    NavagationComponent,
    FooterComponent,
    LandingComponent,
    AboutComponent,
    ContactComponent,
    StaffComponent,
    MinistriesComponent,
    PreschoolComponent,
    MenComponent,
    ServeComponent,
    ConnectComponent,
    ConnectItemComponent,
    LibraryComponent,
    FbVideoComponent,
    YouthComponent,
    NativityComponent,
    EventsComponent,
    FacebookSermonsComponent,
    EasterComponent,
    YtVideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
