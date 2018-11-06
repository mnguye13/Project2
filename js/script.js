function aboutModal(){
  var btn = document.getElementById('aboutBtn');
  var span = document.getElementsByClassName("close")[0];
  var modal = document.getElementById('aboutBox');
  btn.onclick = function() {
    modal.style.display = "block";
  }
  span.onclick = function() {
    modal.style.display = "none";
  }
}
