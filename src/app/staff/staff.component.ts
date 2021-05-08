import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { sheetService } from '../services/sheetService';
import {formatImgUrl, formatImgUrl2} from '../services/helpers';

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

    this.staffSubscription = this.sheetService.getStaffListener()
    .subscribe((items:[])=>{


        this.staff = items.map((item:RawStaff)=> {
          return {
            name:item.Name,
            description:item.Description,
            picture:formatImgUrl2(item.pictureUrl),
            email:item.Email,
            title:item.Title
        }
        });
        console.log("staff items", this.staff)
    });

    this.sheetService.getStaff();
  }

  ngOnDestroy():void {
    this.staffSubscription.unsubscribe();
  }

}
