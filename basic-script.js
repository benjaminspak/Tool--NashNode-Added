function check() {
  //  Get all buttons in DOM
  var allButtons = document.getElementsByClassName('follow-button');

  //  For each button in HTMLCollection
  for (let item of allButtons) {
    //  Grab the text of the button
    var buttonText = item.childNodes[1].innerText;

    if(buttonText === "FOLLOW") {
      item.click();
      console.log("Followed");
    }
    else if(buttonText === "FOLLOWING") {
      console.log("Already Following");
    }
  }
  window.scrollTo(0,document.body.scrollHeight);
  setTimeout(check, 25000);
}
check()