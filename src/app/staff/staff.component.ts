import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { sheetService } from '../services/sheetService';
import {formatImgUrl, formatImgUrl2} from '../services/helpers';
import jsonStaff from '../../assets/data/staff.json';

export interface RawStaff {
  Name:string,
  Title:string,
  Email:string,
  pictureUrl?:string,
  Description?:string,
}

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit, OnDestroy {

  public staff = [];
  private staffSubscription: Subscription;

  constructor(private sheetService: sheetService) { }

  ngOnInit(): void {

    this.staff = jsonStaff.map((item:RawStaff)=> {
      return {
        name:item.Name,
        description:item.Description,
        picture:formatImgUrl2(item.pictureUrl),
        email:item.Email,
        title:item.Title
      }
    });
  }

  ngOnDestroy():void {
    this.staffSubscription.unsubscribe();
  }

}
