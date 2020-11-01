import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ConnectItemComponent } from './connect/connect-item/connect-item.component';
import { ConnectComponent } from './connect/connect.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { LibraryComponent } from './library/library.component';
import { MenComponent } from './ministries/men/men.component';
import { MinistriesComponent } from './ministries/ministries.component';
import { PreschoolComponent } from './ministries/preschool/preschool.component';
import { ServeComponent } from './ministries/serve/serve.component';
import { SermonsComponent } from './sermons/sermons.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
  { path: 'sermons', component: SermonsComponent},
  { path: 'about', component: AboutComponent},
  { path: 'library', component: LibraryComponent},
  { path: '', component: LandingComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'staff', component: StaffComponent},
  { path: 'ministries', component: MinistriesComponent},
  { path: 'ministries/preschool', component: PreschoolComponent},
  { path: 'ministries/men', component: MenComponent},
  { path: 'ministries/serve', component: ServeComponent},
  { path: 'connect', component: ConnectComponent},
  { path: 'connect/:slug', component: ConnectItemComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
