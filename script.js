const head = document.getElementById("nav");
let headHeight = head.offsetHeight;
let yOffset = headHeight * -1 - 6;
window.onresize = getHeadHeight;
function getHeadHeight(){
    headHeight = head.offsetHeight;
    yOffset = headHeight * -1 - 6;
;}

function getHome(){
    var element = document.getElementById("home");
    scrollFixed(element);
}
function getDate(){
    var element = document.getElementById("date");
    scrollFixed(element);
}
function getArtist(){
    var element = document.getElementById("artist");
    scrollFixed(element);
}
function getPrice(){
    var element = document.getElementById("price");
    scrollFixed(element);
}

function scrollFixed(element){
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
}