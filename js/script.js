import anything from './test.js';

console.log(anything);
let songNamesArray = []
let artistsArray = []
let lengthsArray = []
let imagesArray = []
let songLinksArray = []


function appendArrays() {
  let name = $("#song-name").val();
  let artist = $("#artist").val();
  let length = $("#length").val();
  let image = $("#picture-link").val();
  let link = $("#song-link").val();
  
  if (name !== "") {
    songNamesArray.push(name);
    artistsArray.push(artist);
    lengthsArray.push(length);
    imagesArray.push(image);
    songLinksArray.push(link);
    //console.log(songNamesArray);
  }
  else {}
}

function addRows(item) {
  let table = document.getElementById("table-body");
  let row = table.insertRow(-1);
  
  let cellNumber = row.insertCell(0);
  let cell1 = row.insertCell(1);
  let cell2 = row.insertCell(2);
  let cell3 = row.insertCell(3);
  let cell4 = row.insertCell(4);
  let cell5 = row.insertCell(5);
  
  cell1.innerHTML = item;
  let rowIndex = songNamesArray.lastIndexOf(item); 
  console.log(rowIndex);
  cell2.innerHTML = artistsArray[rowIndex];
  cell3.innerHTML = lengthsArray[rowIndex];
  cellNumber.innerHTML = parseInt(rowIndex) +1;
  
  
  let imageForTable = imagesArray[rowIndex];
  if (imageForTable === "") {cell4.innerHTML = "";}
  else {cell4.innerHTML = `<img src=${imageForTable} alt=${imageForTable}>`;}  
  
  
  let linkForTable = songLinksArray[rowIndex];
    console.log(linkForTable);
  linkForTable = linkForTable.slice(32);
    console.log(linkForTable);
  let linkForTableRaw = linkForTable.slice(0, 11);
    console.log(linkForTable);
  let linkForTableYoutube = 'https://www.youtube.com/embed/' + linkForTableRaw;
    console.log(linkForTable);
  
  if (linkForTableRaw.length !== 11) {cell5.innerHTML = "";}
  else {
    cell5.innerHTML = `<iframe width="560" height="315" src='${linkForTableYoutube}' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      console.log(cell5.innerHTML);
  } 
}

function makeTableWork() {
  appendArrays();
  $("#main-table tbody tr").remove();
  
  for (let item of songNamesArray) {
    addRows(item);
  }
}

function deleteTableItem() {
  let songToDelete = $(".deleteInput").val();
  let songToDeleteIndex = parseInt(songToDelete) - 1;
  console.log(songToDeleteIndex);
  $("#main-table tbody tr").remove();
  
  songNamesArray.splice(songToDeleteIndex, 1);
  artistsArray.splice(songToDeleteIndex, 1);
  lengthsArray.splice(songToDeleteIndex, 1);
  imagesArray.splice(songToDeleteIndex, 1);
  songLinksArray.splice(songToDeleteIndex, 1);
  
  
  
  
  
  for (let item of songNamesArray) {
    addRows(item);
  }
}

document.querySelector(".submit").onclick=function(){
  makeTableWork();
  //console.log(songNamesArray);
};

document.querySelector(".delete").onclick=function(){
  deleteTableItem();
};