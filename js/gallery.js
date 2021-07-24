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
var openDescTag = "<button id='myBtn'>";
var closeDescTag = "</button>";

//create a loop to create 10 images starting with index of 0
for (var i=0; i<10; i++) {
    fileNames.push("cat"+(i+1));
    captionName.push("License number:A000" + (i+1));
    photos.push("<img src='images/" + fileNames[i] + ".jpeg'/>");
    captions.push(openCaptionTag + "<h3>"+ captionName[i] + "</h3>" + closeCaptionTag);
    description=openDescTag + descText +closeDescTag;
    image = openList + photos[i] + captions[i] + description + closeList;
    imageList.push(image);

}

//display all ten image codes stored in the array
document.getElementById("album").innerHTML = imageList;


