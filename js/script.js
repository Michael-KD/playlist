let songNamesArray = []
let artistsArray = []
let lengthsArray = []
let imagesArray = []
let songLinksArray = []

function appendArrays() {
  let name = document.getElementById("song-name").value
  let artist = document.getElementById("artist").value
  let length = document.getElementById("length").value
  let image = document.getElementById("picture-link").value
  let link = document.getElementById("song-link").value
  
  songNamesArray.push(name);
  artistsArray.push(artist);
  lengthsArray.push(length);
  imagesArray.push(image);
  songLinksArray.push(link);
}

function addRows() {
  if (songNamesArray.pop() === "") {}
  else {
  let table = document.getElementById("main-table");
  let row = table.insertRow(-1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);
  }
}


document.querySelector(".submit").onclick=function(){
  appendArrays();
  for (let item of songNamesArray) {
    addRows();
  }
};
