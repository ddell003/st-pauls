import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SermonsComponent } from './sermons/sermons.component';

const routes: Routes = [
  { path: 'sermons', component: SermonsComponent},
  { path: '', component: LandingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
