function openNav() {
  document.getElementById("nav-overlay").style.display = "block";
}

function closeNav() {
  document.getElementById("nav-overlay").style.display = "none";
}

function openVideo() {
  document.getElementById("video-overlay").style.display = "block";
}

function closeVideo() {
  document.getElementById("video-overlay").style.display = "none";
}

function switchDropdown(options_id_number) {
  options_id = "options-" + options_id_number;

  if (document.getElementById(options_id).style.display == "") {
    document.getElementById(options_id).style.display = "block";
  } else {
    document.getElementById(options_id).style.display = "";
  }
}

function selectOption(dropDown_id_number, button_id) {
  dropDown_id = "dropdown-" + dropDown_id_number;

  document.getElementById(dropDown_id).innerHTML =
    document.getElementById(button_id).innerHTML;
  document.getElementById(dropDown_id).style.fontWeight = "700";
}

function showHiddenImages() {
  document.getElementById("image-grid-button").style.display = "none";
  Array.from(document.getElementsByClassName("image-hidden")).forEach(
    (element) => {
      element.style.display = "block";
    }
  );
}
