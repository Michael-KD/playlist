//OBJECT CODE//


//INITIALIZE VARIABLES
let allSongsArray = [];
let allSongsArrayLocal;
let songNamesArray = []
let artistsArray = []
let lengthsArray = []
let imagesArray = []
let songLinksArray = []
let isReloaded = false;
let numSongs;
//////////////////////

function deleteAlert(int) {
    var answer = confirm ("Please click on OK to delete your song.");
    if (answer) {
        $("#main-table tbody tr").remove();

    let songToDeleteIndex = parseInt(int) - 1;
    allSongsArray.splice(songToDeleteIndex, 1);
  
  //ADD ALL ROWS AGAIN
  for (let itemNum in allSongsArray) {
    addRows(itemNum);
  }
    }
}


//CHECK IF RELOADED
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  isReloaded = true;
} else {
  isReloaded = false
}
////////////////////

//GET ITEMS FROM LOCAL STORAGE
let test = JSON.parse(localStorage.getItem("allSongsArrayJSON"));

if (test == null){}
else {

// // songNamesArray = JSON.parse(localStorage.getItem("songNamesArrayJSON"));
// // artistsArray = JSON.parse(localStorage.getItem("artistsArrayJSON"));
// // lengthsArray = JSON.parse(localStorage.getItem("lengthsArrayJSON"));
// // imagesArray = JSON.parse(localStorage.getItem("imagesArrayJSON"));
// // songLinksArray = JSON.parse(localStorage.getItem("songLinksArrayJSON"));
let allSongsArray = JSON.parse(localStorage.getItem("allSongsArrayJSON"));
console.log(allSongsArray);
}
///////////////////////////////

//LOCAL STORAGE ADD BUTTON FUNCTION
function addLocalStorage() {
  
  if (isReloaded == true) {
    
    // allSongsArray = allSongsArrayLocal;
  
  //REMOVE ALL ROWS IN TABLE
  $("#main-table tbody tr").remove();
  //////////////////////////
  
  for (let itemNum in allSongsArray) {
    addRows(itemNum);
  }  

    isReloaded = false;
  } 
  else {
  }
}
////////////////////////////////

//APPEND NEW INPUTS TO ARRAYS
function appendArrays() {
  let name = $("#song-name").val();
  let artist = $("#artist").val();
  let length = $("#length").val();
  let image = $("#picture-link").val();
  let link = $("#song-link").val();
  
  if (name !== "") {
    numSongs = allSongsArray.length;
    console.log(numSongs);
    allSongsArray[numSongs] = {"name": name, "artist": artist, "length": length, "image": image, "link": link};
    
  

    //PUSH TO LOCAL STORAGE
    // localStorage.setItem("songNamesArrayJSON", JSON.stringify(songNamesArray));
    // localStorage.setItem("artistsArrayJSON", JSON.stringify(artistsArray));
    // localStorage.setItem("lengthsArrayJSON", JSON.stringify(lengthsArray));
    // localStorage.setItem("imagesArrayJSON", JSON.stringify(imagesArray));
    // localStorage.setItem("songLinksArrayJSON", JSON.stringify(songLinksArray));
    localStorage.setItem("allSongsArrayJSON", JSON.stringify(allSongsArray));
    ////////////////////////
    
  }
  else {
    
  }
}
//////////////////////////

//ADD ALL VALUES IN ARRAY TO TABLE
function addRows(itemNum) {
  let table = document.getElementById("table-body");
  let row = table.insertRow(-1);
  
  let cellNumber = row.insertCell(0);
  let cell1 = row.insertCell(1);
  let cell2 = row.insertCell(2);
  let cell3 = row.insertCell(3);
  let cell4 = row.insertCell(4);
  let cell5 = row.insertCell(5);
  cell1.innerHTML = allSongsArray[itemNum]["name"];
  let rowIndex = songNamesArray.lastIndexOf(itemNum); 
  cell2.innerHTML = allSongsArray[itemNum]["song"];
  cell3.innerHTML = allSongsArray[itemNum]["length"];
  
  let rowNumber = parseInt(itemNum) + 1;
  cellNumber.innerHTML = `<a onclick="deleteAlert(${rowNumber})">${rowNumber}</a>`;
  
  //ADD IMAGE INTO IMG TAG
  let imageForTable = allSongsArray[itemNum]["image"];
  if (imageForTable === "") {cell4.innerHTML = "";}
  else {cell4.innerHTML = `<img src=${imageForTable} alt=${imageForTable}>`;}  
  ////////////////////////
  
  //IFRAME FOR YOUTUBE PLAYER
  let linkForTable = allSongsArray[itemNum]["link"];
  linkForTable = linkForTable.slice(32);
  let linkForTableRaw = linkForTable.slice(0, 11);
  let linkForTableYoutube = 'https://www.youtube.com/embed/' + linkForTableRaw;
  
  if (linkForTableRaw.length !== 11) {cell5.innerHTML = "";}
  else {
    cell5.innerHTML = `<iframe width="560" height="315" src='${linkForTableYoutube}' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  } 
  ///////////////////////////
}
///////////////////////////////////

//CALL ALL FUNCTIONS AND UPDATE THE TABLE
function makeTableWork() {
  appendArrays();
  
  //REMOVE ALL ROWS IN TABLE
  $("#main-table tbody tr").remove();
  //////////////////////////
  
  for (let itemNum in allSongsArray) {
    addRows(itemNum);
  }  
}
//////////////////////////////////////////

//DELETE A ROW ON THE TABLE
function deleteTableItem(rowNum) {
  let songToDelete = $(".deleteInput").val();
  let songToDeleteIndex = parseInt(songToDelete) - 1;
  //REMOVE ALL ROWS
  $("#main-table tbody tr").remove();
  /////////////////

  allSongsArray.splice(songToDeleteIndex, 1);
  
  //ADD ALL ROWS AGAIN
  for (let itemNum in allSongsArray) {
    addRows(itemNum);
  }
  ////////////////////
}
//////////////////////////// 

//ADD SONGS BUTTON
document.querySelector(".submit").onclick=function(){
  makeTableWork();
  sessionStorage.setItem("reload-check", "test1");
};
//////////////////

//DELETE BUTTON
document.querySelector(".delete").onclick=function(){
  deleteTableItem();
};
///////////////

//ADD LOCAL STORAGE ITEMS BUTTON
document.querySelector(".localadd").onclick=function(){
  addLocalStorage();
};
/////////////////////////////////

