import "./../scss/style.scss";
import { TheList } from "./models/TheList";
/* import { doneListHtml } from "./models/doneListHtml"; */

const userImgUrl =
  "https://www.shareicon.net/data/512x512/2016/05/24/770046_people_512x512.png";
const body = document.querySelector("body");
const d = new Date();
// börjar med header taggar
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
// skapar en array av alla månader för att printa de
// när man anropar date.getmonth() metoden så för man en siffra feån 0-11 och inte namn på månaderna, alltså man får en index
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

//början av main (tag)

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

//en array av alla veckanss dagar
const days = ["Mån", "Tis", "Ons", "Tors", "Fre", "Lör", "Sön"];
// loopar genom listan och visar i sidan
for (let i = 0; i < days.length; i++) {
  const dayLi = document.createElement("li");
  dayLi.innerText = days[i];

  dayLi.className = "weeksContainer__days--day";
  dayContainer.appendChild(dayLi);
  // if satsen hittagr dagens index och den indexen får en class
  if (i + 1 == d.getDay()) {
    dayLi.classList.add("next");
  }
  //fellll, måste fixas
  const dateLi = document.createElement("li");
  dateLi.innerText = d.getDate();
  dateContainer.appendChild(dateLi);
}

// ritar en linje under datumen
const drawLine = document.createElement("div");
drawLine.classList.add("line");
mainContent.appendChild(drawLine);

// Kriver idag
const todayTag = document.createElement("h2");
todayTag.innerText = "Idag";
todayTag.className = "mainContent__todayTag";
mainContent.appendChild(todayTag);

// skpar en behållare för hela list i main
const listContainer = document.createElement("div");
listContainer.className = "mainContent__listContainer";
mainContent.appendChild(listContainer);

// skapar två nya lista för att exprementera
const firstList = new TheList(false, "idag ska jag göra klar min ");
const sList = new TheList(false, "idag ska jag göra ...");

let lists = [firstList, sList];
const doneLists = [];
const createNewElemt = () => {
  for (let i = 0; i < lists.length; i++) {
    const list = document.createElement("div");
    const checkbox = document.createElement("input");
    const toDoText = document.createElement("p");

    checkbox.addEventListener("click", () => {
      doneLists.push(lists);
      //lists.splice(i, 1);
      doneListHtml();
      //createNewElemt();
    });

    checkbox.type = "checkbox";
    toDoText.innerText = lists[i].whatToDo;
    checkbox.checked = lists[i].isDone;

    list.className = "mainContent__listContainer--list";
    checkbox.className = "mainContent__listContainer--list__checkbox";
    toDoText.className = "mainContent__listContainer--list__toDoText";

    listContainer.appendChild(list);
    list.appendChild(checkbox);
    list.appendChild(toDoText);
  }
};
createNewElemt();

const doneListContainer = document.createElement("div");
doneListContainer.className = "mainContent__doneListContainer";
mainContent.appendChild(doneListContainer);

const doneListHtml = () => {
  doneListContainer.innerHTML = "";
  for (let i = 0; i < doneLists.length; i++) {
    const list = document.createElement("div");
    const checkbox = document.createElement("input");
    const toDoText = document.createElement("p");

    checkbox.type = "checkbox";
    toDoText.innerText = lists[i].whatToDo;
    checkbox.checked = true;

    list.className = "mainContent__listContainer--list";
    checkbox.className = "mainContent__listContainer--list__checkbox";
    toDoText.className = "mainContent__listContainer--list__toDoText";

    doneListContainer.appendChild(list);
    list.appendChild(checkbox);
    list.appendChild(toDoText);
  }
};
