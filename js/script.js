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
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);
  
  cell1.innerHTML = item;
  let rowIndex = songNamesArray.lastIndexOf(item); 
  console.log(rowIndex);
  cell2.innerHTML = artistsArray[rowIndex];
  cell3.innerHTML = lengthsArray[rowIndex];
  let imageForTable = imagesArray[rowIndex];
  cell4.innerHTML = `<img src=${imageForTable} alt=${imageForTable}>`;
  let linkForTable = songLinksArray[rowIndex];
    console.log(linkForTable);
  linkForTable = linkForTable.slice(32);
    console.log(linkForTable);
  linkForTable = linkForTable.slice(0, 11);
    console.log(linkForTable);
  linkForTable = 'https://www.youtube.com/embed/' + linkForTable;
    console.log(linkForTable);
  cell5.innerHTML = `<iframe width="560" height="315" src='https://www.youtube.com/embed/${linkForTable}' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}

function addName() {
  //cell1.innerHTML = item;
}


document.querySelector(".submit").onclick=function(){
  appendArrays();
  $("#main-table tbody tr").remove();
  
  for (let item of songNamesArray) {
    addRows(item);
  }
  //console.log(songNamesArray);
};
