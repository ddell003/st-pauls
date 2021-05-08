import {DomSanitizer} from '@angular/platform-browser';

export const processGSheetResults = (JSONResponse) => {
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
/**
 * Looks to see if a google sharedlink is provided, if so we need to transform it
 * @param url
 * @returns
 */
export const formatImgUrl = (url) => {
  let formatted = url;
  const urlParts = url.split("/");

  if(urlParts[2] === "drive.google.com"){
    const id = urlParts[(urlParts.length - 2)];
    formatted = `https://drive.google.com/thumbnail?id=${id}`;
  }
  return formatted;
}

export const formatImgUrl2 = (url) => {
  let formatted = url;
  const urlParts = url.split("/");

  if(urlParts[2] === "drive.google.com"){
    const id = urlParts[(urlParts.length - 2)];
    formatted = `https://lh3.googleusercontent.com/d/${id}=s400`;
  }
  return formatted;
}
