function createDiv(){
$(document).ready(function(){
  var test = {
id: "div",
class: "divclass",
css:{
    "color": "red"
}
  };
  var $div = $("<div>", test);
  $div.html("Wuss poppin', jimbo?");
  $("body").append($div);
});
}