import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import nodefetch from 'node-fetch';
import { Video } from '../sermons/video.model';
import { Subject } from 'rxjs';
import {processGSheetResults} from './helpers';

@Injectable({
  providedIn: 'root'
})
export class sheetService {

  private itemsLoaded = new Subject<{}[]>();
  private bullitensLoaded = new Subject<{}[]>();
  private newsLoaded = new Subject<{}[]>();


  items = [];
  bulletins = [];
  news = [];

  constructor(private http: HttpClient) { }

  getSheetListener() {
    return this.itemsLoaded.asObservable();
  }

  getBullitenListener() {
    return this.bullitensLoaded.asObservable();
  }
  getNewsListener() {
    return this.newsLoaded.asObservable();
  }

  getItems(sheetNumber){

    const url = `https://spreadsheets.google.com/feeds/cells/1haU9CTvqVnhg8rSwn2q83O7KJWl_KG2ccL_dF1fW8xI/${sheetNumber}/public/values?alt=json-in-script`;
    this.http.get(url, {responseType: 'text'})
      .subscribe((body)=> {
        const formattedText = body
          .replace('gdata.io.handleScriptLoaded(', '')
          .slice(0, -2);
          const data = JSON.parse(formattedText)
          this.items = processGSheetResults(data).reverse();
          this.itemsLoaded.next([...this.items]);
          console.log("events", this.items)
      },
      error => {
        console.log("error", error)
      },);
  }

  getBulletin(){
    const sheetNumber = 3
    const url = `https://spreadsheets.google.com/feeds/cells/1haU9CTvqVnhg8rSwn2q83O7KJWl_KG2ccL_dF1fW8xI/${sheetNumber}/public/values?alt=json-in-script`;
    this.http.get(url, {responseType: 'text'})
      .subscribe((body)=> {
        const formattedText = body
          .replace('gdata.io.handleScriptLoaded(', '')
          .slice(0, -2);
          const data = JSON.parse(formattedText)
          this.bulletins = processGSheetResults(data).reverse();
          this.bullitensLoaded.next([...this.bulletins]);
          console.log(this.bulletins)
      },
      error => {
        console.log("error", error)
      },);
  }

  getNews(){
    const sheetNumber = 4
    const url = `https://spreadsheets.google.com/feeds/cells/1haU9CTvqVnhg8rSwn2q83O7KJWl_KG2ccL_dF1fW8xI/${sheetNumber}/public/values?alt=json-in-script`;
    this.http.get(url, {responseType: 'text'})
      .subscribe((body)=> {
        const formattedText = body
          .replace('gdata.io.handleScriptLoaded(', '')
          .slice(0, -2);
          const data = JSON.parse(formattedText)
          this.news = processGSheetResults(data).reverse();
          this.newsLoaded.next([...this.news]);
      },
      error => {
        console.log("error", error)
      },);
  }








}



