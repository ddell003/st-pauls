import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import nodefetch from 'node-fetch';
import { Video } from '../sermons/video.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacebookService {

  private videosLoaded = new Subject<Video[]>();


  videos = [];

  constructor(private http: HttpClient) { }

  getVideoListener() {
    return this.videosLoaded.asObservable();
  }

  getVideos(){
    console.log("in the service");
    //https://docs.google.com/spreadsheets/d/e/2PACX-1vRLIn8nPfoI36n0VFosWmRDVqpaaIOK0RW0a95nt6LdgSYwB3UPYHgT8QMb5Z9lDs83mRQbx3gBl1e5/pubhtml
    const sheetNumber = 1;
    const sheetId = "1haU9CTvqVnhg8rSwn2q83O7KJWl_KG2ccL_dF1fW8xI"
    const sheetsUrl = `https://spreadsheets.google.com/feeds/cells/${sheetId}/${sheetNumber}/public/values?alt=json-in-script`;
    const url2 = "https://spreadsheets.google.com/feeds/cells/1haU9CTvqVnhg8rSwn2q83O7KJWl_KG2ccL_dF1fW8xI/1/public/values?alt=json-in-script";
    console.log("in service");

    this.http.get(url2, {responseType: 'text'})
      .subscribe((body)=> {
        const formattedText = body
          .replace('gdata.io.handleScriptLoaded(', '')
          .slice(0, -2);
          const data = JSON.parse(formattedText)
          this.videos = this.processGSheetResults(data).reverse();
          console.log("service", this.videos)
          this.videosLoaded.next([...this.videos]);
      },
      error => {
        console.log("error", error)
      },);


  }

  processGSheetResults(JSONResponse) {
    const data = JSONResponse.feed.entry;
    const startRow = 2; // skip the header row(1), don't need it

    let processedResults = [{}];
    let colNames = {};

    for (let item of data) {
      const cell = item['gs$cell']; // gets cell data
      const val = cell['$t']; // gets cell value
      const columnNum = cell['col']; // gets the col number
      const thisRow = cell['row']; // gets the row number

      const colNameToAdd = colNames[columnNum]; // careful, this will be undefined if we hit it on the first pass

      // don't add this row to the return data, but add it to list of column names
      if (thisRow < startRow) {
        colNames[columnNum] = val;
        continue; // skip the header row
      }

      if (typeof processedResults[thisRow] === 'undefined') {
        processedResults[thisRow] = {};
      }

      if (typeof colNameToAdd !== 'undefined' && colNameToAdd.length > 0) {
        processedResults[thisRow][colNameToAdd] = val;
      }
    }

    // make sure we're only returning valid, filled data items
    processedResults = processedResults.filter(
      result => Object.keys(result).length
    );

    return processedResults;
  }






}



