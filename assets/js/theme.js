var quotesPos = 0;

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

function quotesMove(direction) {
  const quotes = document.getElementsByClassName("quote");
  if (direction == "right") {
    if (!(quotesPos >= quotes.length - 1)) {
      quotesPos++;
      for (let i = 0; i < quotes.length; i++) {
        if (i == quotesPos) {
          quotes[i].style.display = "block";
        } else {
          quotes[i].style.display = "none";
        }
      }
    }
  } else if (direction == "left") {
    if (!(quotesPos == 0)) {
      quotesPos--;
      for (let i = 0; i < quotes.length; i++) {
        if (i == quotesPos) {
          quotes[i].style.display = "block";
        } else {
          quotes[i].style.display = "none";
        }
      }
    }
  }

  if (quotesPos == 0) {
    document.getElementById("arrow-left").style.opacity = "50%";
    document.getElementById("arrow-left").style.cursor = "initial";
  } else if (quotesPos == quotes.length - 1) {
    document.getElementById("arrow-right").style.opacity = "50%";
    document.getElementById("arrow-right").style.cursor = "initial";
  } else {
    document.getElementById("arrow-left").style.opacity = "100%";
    document.getElementById("arrow-left").style.cursor = "pointer";
    document.getElementById("arrow-right").style.opacity = "100%";
    document.getElementById("arrow-right").style.cursor = "pointer";
  }
}

function formSubmited() {
  document.getElementById("form-bottom").style.display = "none";
  document.getElementById("after-submit").style.display = "block";
}
