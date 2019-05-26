var check = function() {
  var allButtons = document.getElementsByClassName('follow-button');

  for (var i=0; i<allButtons.length; i++) {
    var currentButton = allButtons[0];
    var buttonText = currentButton.childNodes[1].innerText;

    if(buttonText === "FOLLOW") {
      currentButton.click();
      console.log("Followed");
      window.scrollTo(0,document.body.scrollHeight);
      setTimeout(check, 2500);
    }
    else if(buttonText === "FOLLOWING") {
      console.log("Already Following");
    }
  }
}

check();
