//  Check if Users on Page Are Being Followed
function checkIfFollowing() {
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
  setTimeout(checkIfFollowing, 25000);
}

//  Scroll Every 5 Seconds
function scroll() {
  window.scrollTo(0,document.body.scrollHeight);
  setTimeout(scroll, 5000);
}

//  Check if User Has Default Avatar
function checkAvatar() {
  var allAvatars = document.getElementsByClassName('user-photo');
  var getAvatar = allAvatars[0].childNodes[0].childNodes[0].src
  
  var defaultAvatar = "https://hashnode.imgix.net/res/hashnode/image/upload/v1543775253858/B1AzNobk4.png?w=241&h=241&fit=crop&crop=entropy&auto=format,enhance&q=60"

  if (getAvatar == defaultAvatar) {
    skip
  }
  else {
    follow
  }
}

//  Check if User Has Empty Biography
function checkBioExists() {
  var allBios = document.getElementsByClassName('user-info');
  var getBioText = allBios[0].outerText
  var emptyBio = ""
  if (getBioText == emptyBio) {
    skip
  }
  else {
    follow
  }
}
