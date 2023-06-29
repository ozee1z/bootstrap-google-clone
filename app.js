/*Hide tooltip on app icon when
clicked on and make it visible when hover over it*/

const tooltipText = document.querySelector('.tooltip-text');

function mousedown(){
  tooltipText.style.visibility = "hidden";
};

function mouseover() {
  tooltipText.style.visibility = "";
};

/*Hide bootstrap collapse pane when you click outside of it*/
document.addEventListener('click', function(event){
    const target = event.target;
    const collapse = document.querySelector('.collapse');
    const collapsePane = document.querySelector('.collapsePane');

    if(!collapse.contains(target) && target !== collapsePane){
        collapse.classList.remove('show');
    }
});

/*Tooltip for the mic and camera icons in the search bar */
document.addEventListener('DOMContentLoaded', function() {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
});



/*Onclick function for the light theme icon*/
function handleClick(){
  myFunction();
  inputFieldColor();
  toggleIcon() 
}

/*light and dark theme function*/

function myFunction() {
  /*This code changes the body of the page from light to dark mode*/
  let element = document.body;
  element.classList.toggle("dark-mode");
  
  /*This code changes the google search border 
  color when toggle from light to dark mode*/

  let borderColor = document.querySelector(".border-color");
  borderColor.classList.toggle("border-secondary");

  /*This code changes the nav links 
  color when toggle from light to dark mode*/

  let navColor = document.querySelectorAll(".nav-color");
  navColor.forEach(function(navCol){
    navCol.classList.toggle("text-white");
  });

  /*This code changes the background color when you hover
  over the appIcon when toggle from light to dark mode*/

  let navColorHover = document.querySelector('.navColorHov');
  navColorHover.classList.toggle("appIcon-dark-mode");

  /*This code changes the background color and hover background color
  of the signIn button when toggle from light to dark mode*/

  let signInBtn = document.querySelector(".signIn");
  signInBtn.classList.toggle("signInColor");
  
  /*This code changes the goole logo to a light goole logo when toggle*/
  let googleImg = document.querySelector(".google-img1");
  if(googleImg.src.endsWith("img/googlelogo.png")){
    googleImg.src = "img/googlelogo_light_color.png";
  }
  else{
    googleImg.src = "img/googlelogo.png";
  }

  /*This code adds white border when hover to the buttons below the search input bar*/
  let btnSearchToggle = document.querySelectorAll(".btn-search");
  btnSearchToggle.forEach(function(btnToggle){
    btnToggle.classList.toggle("btnToggle-search");
  })

  let collapseCard = document.querySelector(".card-div");
  collapseCard.classList.toggle("collapse-card-dark-mode");

  let collapseCardText = document.querySelectorAll(".cardCollapsibleIconTitle");
  collapseCardText.forEach(function(textColor){
    textColor.classList.toggle("collapse-card-text-dark-mode")
  });

  let collapseCardHover = document.querySelectorAll(".collapsibleIconStyle");
  collapseCardHover.forEach(function(cardHover){
    cardHover.classList.toggle("collapsibleIconStyle-dark-mode");
  });

  let borderAfterShoppingIcon = document.querySelector(".borderAfterShoppingIcon");
  borderAfterShoppingIcon.classList.toggle("borderAfterShoppingIcon-dark-mode");

  let cardButtonMoreLink = document.querySelector(".btnMoreIconLink");
  cardButtonMoreLink.classList.toggle("btnMoreIconLink-dark-mode");

  let footerBorder = document.querySelector(".footer-border");
  footerBorder.classList.toggle("border-secondary");
}


/*This code changes the input field color and
 search button colors when toggle from light to dark mode*/

let currentColor = false;

function inputFieldColor(){
  let inFC = document.querySelector(".inputField");
  let searchBtn = document.querySelectorAll(".btn-search");
  let color1 = "white";
  let color2 = "#202124";
  let color3 = "#303134"
  let color4 = "#f0f0f0"

  if(currentColor){
    inFC.style.backgroundColor = color1;
    inFC.style.color = color2;
    searchBtn.forEach((button) => {
      button.style.backgroundColor = color4;
      button.style.color = color2;
    });
   
  }
  else{
    inFC.style.backgroundColor = color2;
    inFC.style.color = color1;
    searchBtn.forEach((button) => {
      button.style.backgroundColor = color3;
      button.style.color = color1;
    });
    
  }

   currentColor = !currentColor;
}

/*Change light mode icon to dark mode icon function*/
let lightModeIcon = false;
let changeToDarkModeIcon = document.querySelector(".light-mode-icon");

function toggleIcon() {
  lightModeIcon = !lightModeIcon;
  if(lightModeIcon){
    changeToDarkModeIcon.innerHTML = 'dark_mode';
  }
  else {
    changeToDarkModeIcon.innerHTML = 'light_mode'
  }
}


  let hoverTouch = document.querySelector(".appIcon");
  hoverTouch.addEventListener(function(){
    hoverTouch.classList.add("touched");
  });