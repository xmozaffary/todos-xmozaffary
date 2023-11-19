import "./../scss/style.scss";
import { TheList } from "./models/TheList";

/* import { doneListHtml } from "./models/doneListHtml";
  en if sats behövs för man ska inte kunna lägga till en todo list utan namn
  datumen fungerer inte som det ska
  om det finns tid lägga till en button så att man kan ta bort en lista när man klickeer på den
  style för tablet och desktop

  VIKTIG: kunna sortera listan??? vad menas med det?
*/
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
whatIsGingOn.innerText = "Nu kör vi";

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
const days = ["Sön", "Mån", "Tis", "Ons", "Tors", "Fre", "Lör"];
// loopar genom listan och visar i sidan
for (let i = 0; i < days.length; i++) {
  const dayLi = document.createElement("li");
  dayLi.innerText = days[i];

  dayLi.className = "weeksContainer__days--day";
  dayContainer.appendChild(dayLi);
  // if satsen hittagr dagens index och den indexen får en class
  if (i == d.getDay()) {
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

// skriver idag
const todayDivTag = document.createElement("div");
const divBtnTag = document.createElement("div");
const todayH2Tag = document.createElement("h2");

todayDivTag.className = "mainContent__todayDivTag";
divBtnTag.className = "mainContent__todayDivTag--divBtnTag";
todayH2Tag.innerText = d.getDate() + " " + days[d.getDay()];
divBtnTag.innerText = "lägga till lista";

mainContent.appendChild(todayDivTag);
todayDivTag.appendChild(todayH2Tag);
todayDivTag.appendChild(divBtnTag);

divBtnTag.addEventListener("click", () => {
  const divs = document.createElement("div");
  divs.className = "divs";
  mainContent.appendChild(divs);

  const labelTag = document.createElement("label");
  const inputTag = document.createElement("input");
  const buttonTag = document.createElement("button");

  buttonTag.setAttribute("type", "button");
  buttonTag.setAttribute("class", "divs__btnTag");

  labelTag.setAttribute("for", "name");
  labelTag.setAttribute("class", "divs__labelTag");

  inputTag.setAttribute("type", "text");
  inputTag.setAttribute("id", "name");
  inputTag.setAttribute("class", "divs__inputTag");

  labelTag.innerHTML = "Ange namn på det som du vill göra! ";
  buttonTag.innerHTML = "okej";

  divs.appendChild(labelTag);
  divs.appendChild(inputTag);
  divs.appendChild(buttonTag);

  buttonTag.addEventListener("click", () => {
    const inutValue = inputTag.value;
    var userList = new TheList(false, inutValue);
    lists.push(userList);
    createNewElemt();
  });

  const deleteDivs = document.createElement("img"); // variablen heter div för att i början var det en div sen ändrade jag till img
  deleteDivs.className = "divs__deleteDivs";
  deleteDivs.src = "./../images/x.png";
  divs.appendChild(deleteDivs);

  deleteDivs.addEventListener("click", () => {
    divs.remove();
  });
});
// skpar en behållare för hela list i main
const listContainer = document.createElement("div");
listContainer.className = "mainContent__listContainer";
mainContent.appendChild(listContainer);

// skapar två nya lista för att exprementera
const firstList = new TheList(false, "idag ska jag göra klar min ");
const sList = new TheList(false, "idag ska jag göra ...");

let lists = [firstList, sList];
const doneLists = [];
console.log(doneLists);
const createNewElemt = () => {
  listContainer.innerHTML = "";
  for (let i = 0; i < lists.length; i++) {
    const list = document.createElement("div");
    const checkbox = document.createElement("input");
    const toDoText = document.createElement("p");

    checkbox.addEventListener("click", () => {
      doneLists.push(lists[i]);
      lists.splice(i, 1);

      createNewElemt();
      doneListHtml();
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

const doneLisTitle = document.createElement("p");
doneLisTitle.className = "mainContent__doneListContainer--title";
doneLisTitle.innerText = "Saker som är klar:";
mainContent.appendChild(doneLisTitle);

const doneListContainer = document.createElement("div");

doneListContainer.className = "mainContent__doneListContainer";

mainContent.appendChild(doneListContainer);

const doneListHtml = () => {
  doneListContainer.innerHTML = "";
  for (let i = 0; i < doneLists.length; i++) {
    console.log(doneLists[i]);
    const list = document.createElement("div");
    const checkbox = document.createElement("input");
    const toDoText = document.createElement("p");

    checkbox.addEventListener("click", () => {
      lists.push(doneLists[i]);
      doneLists.splice(i, 1);

      createNewElemt();
      doneListHtml();
    });
    checkbox.type = "checkbox";
    toDoText.innerText = doneLists[i].whatToDo;
    checkbox.checked = true;

    list.className = "mainContent__listContainer--list";
    checkbox.className = "mainContent__listContainer--list__checkbox";
    toDoText.className = "mainContent__listContainer--list__toDoText";

    doneListContainer.appendChild(list);
    list.appendChild(checkbox);
    list.appendChild(toDoText);
  }
};
