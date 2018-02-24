// Get the modal
$var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
$window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
$var modal2 = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
$window.onclick = function(event) {
    if (event.target == modal2) {
        modal.style.display = "none";
    }
}
$function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

$function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}
