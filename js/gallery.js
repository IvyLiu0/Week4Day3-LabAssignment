var photos = [];
var fileNames = [];
var imageList = [];
var image;
var openList = "<li class='photo'>";
var closeList = "</li>"; 
var captions = [];
var captionName = [];
var openCaptionTag = "<caption class='caption'>";
var closeCaptionTag = "</caption>";
var description;
var descText = "Adopt Me Now";

var openDescTag0 = "<button id='myBtn0'>";
var openDescTag1 = "<button id='myBtn1'>";
var openDescTag2 = "<button id='myBtn2'>";
var openDescTag3 = "<button id='myBtn3'>";
var openDescTag4 = "<button id='myBtn4'>";
var openDescTag5 = "<button id='myBtn5'>";
var openDescTag6 = "<button id='myBtn6'>";
var openDescTag7 = "<button id='myBtn7'>";
var openDescTag8 = "<button id='myBtn8'>";
var openDescTag9 = "<button id='myBtn9'>";

var buttons = [openDescTag0, openDescTag1, openDescTag2, openDescTag3, openDescTag4, openDescTag5, openDescTag6, openDescTag7,openDescTag8, openDescTag9];
var closeDescTag = "</button>";

//create a loop to create 10 images starting with index of 0
for (var i=0; i<10; i++) {
    fileNames.push("cat"+(i+1));
    captionName.push("License number:A000" + (i+1));
    photos.push("<img src='images/" + fileNames[i] + ".jpeg'>");
    captions.push(openCaptionTag + "<h3>"+ captionName[i] + "</h3>" + closeCaptionTag);
    description=buttons[i] + descText + closeDescTag;
    image = openList + photos[i] + captions[i] + description + closeList;
    imageList.push(image);

}

//display all ten image codes stored in the array
document.getElementById("album").innerHTML = imageList;


