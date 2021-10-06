let navButtons = document.getElementsByClassName("nav-button");
let basicButtons = document.getElementsByClassName("basics-button");
console.log(navButtons);

for (let i = 0; i < navButtons.length; i++){
  navButtons[i].addEventListener("click", function(evt){

    console.log("A button was clicked");
    console.log(evt.target.id);


    let allContent = document.getElementsByClassName("content");
    for (let j = 0; j < allContent.length; j++){
      allContent[j].style.display = "none";
    }

    let contentID = "content-" + evt.target.id;

    let contentToShow = document.getElementById(contentID);
    contentToShow.style.display = "block";
}

);
}


for (let i = 0; i < basicButtons.length; i++){
    basicButtons[i].addEventListener("click", function(hpn){
  
      console.log("A button was clicked");
      console.log(hpn.target.id);
  
  
      let allContent = document.getElementsByClassName("basics");
      for (let j = 0; j < allContent.length; j++){
        allContent[j].style.display = "none";
      }
  
      let contentID = "basics-" + hpn.target.id;
  
      let contentToShow = document.getElementById(contentID);
      contentToShow.style.display = "block";
  }
  
  );
  }
