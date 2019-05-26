var allButtons = document.getElementsByClassName('follow-button');
for (var i=0;i<allButtons.length; i++) {
    var currentButton = allButtons[i]
    var buttonText = allButtons[i].childNodes[1].innerText
    if(buttonText === "FOLLOW") {
      console.log("Followed")
      currentButton.click();
    }
    else if(buttonText === "FOLLOWING") {
      console.log("Already Following")
    }
}
