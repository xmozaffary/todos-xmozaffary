import "./../scss/style.scss";
const userImgUrl =
  "https://www.shareicon.net/data/512x512/2016/05/24/770046_people_512x512.png";

const body = document.querySelector("body");
const d = new Date();

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

const months = [
  "Januari",
  "Februari",
  "Mars",
  "April",
  "Maj",
  "Juni",
  "Juli",
  "Aususti",
  "September",
  "Oktuber",
  "November",
  "December",
];

let gMonth = months[d.getMonth()];

const mainContent = document.createElement("main");
const month = document.createElement("h1");

month.innerText = gMonth;
mainContent.className = "mainContent";
month.className = "mainContent__month";
body.appendChild(mainContent);
mainContent.appendChild(month);

const weeksContainer = document.createElement("div");
const monthContainer = document.createElement("div");
const dayContainer = document.createElement("ul");
const dateContainer = document.createElement("ul");

weeksContainer.className = "weeksContainer";
monthContainer.className = "weeksContainer";
dayContainer.className = "weeksContainer__days";
dateContainer.className = "weeksContainer__days";

mainContent.appendChild(weeksContainer);
mainContent.appendChild(monthContainer);
weeksContainer.appendChild(dayContainer);
monthContainer.appendChild(dateContainer);

const days = ["Mån", "Tis", "Ons", "Tors", "Fre", "Lör", "Sön"];
for (let i = 0; i < days.length; i++) {
  const dayLi = document.createElement("li");
  dayLi.innerText = days[i];

  dayLi.className = "weeksContainer__days--day";
  dayContainer.appendChild(dayLi);

  if (i + 1 == d.getDay()) {
    dayLi.classList.add("next");
  }

  const dateLi = document.createElement("li");
  dateLi.innerText = d.getDate();
  dateContainer.appendChild(dateLi);
}

console.log(d.getDate());

const drawLine = document.createElement("div");
drawLine.classList.add("line");
mainContent.appendChild(drawLine);
