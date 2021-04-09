import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FacebookService } from '../services/facebook.service';

@Component({
  selector: 'app-sermons',
  templateUrl: './sermons.component.html',
  styleUrls: ['./sermons.component.css']
})
export class SermonsComponent implements OnInit {

  private videoSubscription: Subscription;

  constructor() { }

  ngOnInit(): void {

  }

}
