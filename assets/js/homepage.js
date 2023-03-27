let header = document.querySelector("#header");
let lastScrollValue = 0;
console.log(header)

document.addEventListener('scroll',() => {

        let top  = document.documentElement.scrollTop;
    if(lastScrollValue < top) {
        header.classList.add("hidden");
    } else {
        header.classList.remove("hidden");
    }
    lastScrollValue = top;
});

// testttttt

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.querySelector(".myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function popup(titre,sous_titre,commentaire,) {
  modal.style.display = "block";
  document.querySelector(".modal-content h3").innerHTML = titre
  document.querySelector(".modal-content h4").innerHTML = sous_titre
  document.querySelector(".modal-content p").innerHTML = commentaire
  document.querySelector(".modal-content").classList.toggle("modal-transition")
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
