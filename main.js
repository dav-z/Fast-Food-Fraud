var modal = document.getElementById( 'myModal');

var span = document.getElementsByClassName('close')[0];

var butt = document.getElementsByClassName('submit');

butt.onclick = function() {
  modal.style.display = "none";
}

span.onclick = function() {
  modal.style.display = "none";
}

setTimeout(function(){
  modal.style.display = "block";
}, 3000)
