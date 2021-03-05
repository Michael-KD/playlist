let songNamesArray = []
let artistsArray = []
let lengthsArray = []
let imagesArray = []
let songLinksArray = []
let isReloaded = false;

if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  isReloaded = true;
} else {
  isReloaded = false
}


let test = JSON.parse(localStorage.getItem("songNamesArrayJSON"));

if (test == null){}
else {

songNamesArray = JSON.parse(localStorage.getItem("songNamesArrayJSON"));
artistsArray = JSON.parse(localStorage.getItem("artistsArrayJSON"));
lengthsArray = JSON.parse(localStorage.getItem("lengthsArrayJSON"));
imagesArray = JSON.parse(localStorage.getItem("imagesArrayJSON"));
songLinksArray = JSON.parse(localStorage.getItem("songLinksArrayJSON"));

}

function addLocalStorage() {
  
  if (isReloaded == true) {
    makeTableWork();
    isReloaded = false;
  } 
  else {}
}


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

    
    localStorage.setItem("songNamesArrayJSON", JSON.stringify(songNamesArray));
    localStorage.setItem("artistsArrayJSON", JSON.stringify(artistsArray));
    localStorage.setItem("lengthsArrayJSON", JSON.stringify(lengthsArray));
    localStorage.setItem("imagesArrayJSON", JSON.stringify(imagesArray));
    localStorage.setItem("songLinksArrayJSON", JSON.stringify(songLinksArray));

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
  cell2.innerHTML = artistsArray[rowIndex];
  cell3.innerHTML = lengthsArray[rowIndex];
  cellNumber.innerHTML = parseInt(rowIndex) +1;
  
  
  let imageForTable = imagesArray[rowIndex];
  if (imageForTable === "") {cell4.innerHTML = "";}
  else {cell4.innerHTML = `<img src=${imageForTable} alt=${imageForTable}>`;}  
  
  
  let linkForTable = songLinksArray[rowIndex];
  linkForTable = linkForTable.slice(32);
  let linkForTableRaw = linkForTable.slice(0, 11);
  let linkForTableYoutube = 'https://www.youtube.com/embed/' + linkForTableRaw;
  
  if (linkForTableRaw.length !== 11) {cell5.innerHTML = "";}
  else {
    cell5.innerHTML = `<iframe width="560" height="315" src='${linkForTableYoutube}' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
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
  sessionStorage.setItem("reload-check", "test1");
};

document.querySelector(".delete").onclick=function(){
  deleteTableItem();
};

document.querySelector(".localadd").onclick=function(){
  addLocalStorage();
};