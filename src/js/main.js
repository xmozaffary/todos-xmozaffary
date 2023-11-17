import "./../scss/style.scss";
const userImgUrl =
  "https://www.shareicon.net/data/512x512/2016/05/24/770046_people_512x512.png";

const body = document.querySelector("body");
const d = new Date().getMonth();
console.log(d);

const header = document.createElement("header");
const profileContaner = document.createElement("div");
const userName = document.createElement("h1");
const userImg = document.createElement("img");
const whatIsGingOn = document.createElement("p");

userImg.src = userImgUrl;
userName.innerText = "Hej Ena";
whatIsGingOn.innerText = "Vad händer?";

header.className = "headerContainer";
profileContaner.className = "headerContainer__content";
userName.className = "headerContainer__content--name";
userImg.setAttribute("class", "headerContainer__content--img");
whatIsGingOn.className = "headerContainer__content--text";

body.appendChild(header);
header.appendChild(profileContaner);
profileContaner.appendChild(userName);
profileContaner.appendChild(userImg);
header.appendChild(whatIsGingOn);
