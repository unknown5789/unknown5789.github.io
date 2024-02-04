function openModal() {
    // Get the modal
    var modal = document.getElementById("smashPassPopUp");
    var content = document.getElementsByClassName("smashPassPopUpContent")[0];
    
    modal.style.display = "block";

    // When the user clicks anywhere close it
    window.onclick = function(event) {
      if (event.target == modal || event.target == content) {
        modal.style.display = "none";
      }
    }
};
