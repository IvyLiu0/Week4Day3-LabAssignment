
//h4 class="popheading">Cat 1</h4>
//<p class="popinformation"></p>
//<button id="popbutton">Click this to close...</button>

var headingName = [];
var poptext = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum iaculis suscipit. Nulla feugiat, enim vitae cursus lacinia, mauris felis lacinia turpis, in consectetur quam turpis sit amet lectus.",
    "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris sit amet ligula in tortor lobortis aliquet nec quis sem. Aenean sodales mauris euismod ipsum ullamcorper, a dignissim leo elementum.",
    "Suspendisse potenti. Nunc mollis pulvinar dui, vel rhoncus risus congue vitae. Fusce feugiat massa non lectus euismod imperdiet. Fusce sit amet ornare metus.",
    "Sed vestibulum tincidunt lectus, nec tincidunt ipsum imperdiet ac. Nunc at dolor euismod est vestibulum vulputate eget a tortor. Phasellus pellentesque, libero ac consequat sodales, nunc diam fermentum neque, eu fermentum felis mauris quis lectus.",
    "Mauris ultrices felis id fermentum blandit. Mauris facilisis semper nunc at tempor. Integer fringilla mauris quis lorem faucibus, non iaculis massa laoreet. Phasellus nibh sapien, maximus quis libero iaculis, dictum scelerisque risus.",
    "Vestibulum sed dignissim est, quis consectetur quam. Sed semper ornare odio, quis accumsan est vulputate a. Curabitur est neque, sodales non purus sed, consectetur efficitur libero. Proin ut facilisis lacus, vitae dignissim lectus.",
    "Aliquam luctus dui quis turpis eleifend, a hendrerit nunc viverra. Vivamus rhoncus tristique pellentesque. Etiam non neque eu sapien rutrum porta laoreet non orci.",
    "Suspendisse vitae orci non risus tincidunt ultricies sit amet et nisi. Nam porta eleifend luctus. Aliquam sit amet nulla mollis, condimentum nisi lobortis, auctor risus.",
    "Suspendisse condimentum dolor fringilla lectus iaculis, sit amet posuere est gravida. In elementum quam eget scelerisque ornare. Nulla feugiat erat odio, non iaculis lacus posuere ut.",
    "Maecenas eu sem nec arcu dignissim hendrerit. Sed cursus velit velit, ut sodales ligula bibendum vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis odio dui, et pretium magna feugiat ornare.",
];
var popupheading=[];
var popuptext =[];
var whole=[];
var popupbox = [];
var hOpenTag = "<h3 class='popheading'>";
var hCloseTag = "</h3>";
var pOpenTag = "<p class='popinformation'>";
var pCloseTag = "</p>";

for (var i=0; i<10; i++){
    headingName.push("Cat" + (i+1));
    popupheading=hOpenTag+headingName[i]+hCloseTag;
    popuptext=pOpenTag+poptext[i]+pCloseTag;
    whole=popupheading+popuptext;
    popupbox.push(whole);

}

document.getElementById("popbox").innerHTML = popupbox;
