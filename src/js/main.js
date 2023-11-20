import "./../scss/style.scss";
import { headerHtml } from "./headerhtml";
import { TheList } from "./models/TheList";
/* const userImgUrl =
  "https://www.shareicon.net/data/512x512/2016/05/24/770046_people_512x512.png";
const xImg =
  "https://img.freepik.com/premium-vector/xgrunge-letter-x-vector-cross-sign-hand-drawn-x_546559-33.jpg";
const makeIcon =
  "https://www.freeiconspng.com/thumbs/list-icon/to-do-list-icon-buy-this-icon-for--0-48-1.png"; */
const body = document.querySelector("body");
const d = new Date();
/* 
// börjar med header taggar
const header = document.createElement("header");
const humMenu = document.createElement("div");
const userName = document.createElement("h1");
const userImg = document.createElement("img");

userImg.src =
  "https://www.shareicon.net/data/512x512/2016/05/24/770046_people_512x512.png";
userName.innerText = "HEJ NAME";
humMenu.className = "header__humMenu";
header.className = "header";
userName.className = "header__name";
userImg.setAttribute("class", "header__img");

body.appendChild(header);
header.appendChild(humMenu);
header.appendChild(userName);
header.appendChild(userImg);
for (let i = 0; i < 3; i++) {
  const humMenuIcon = document.createElement("div");
  humMenuIcon.className = "header__humMenu--icon";
  humMenu.appendChild(humMenuIcon);
} 

humMenu.addEventListener("click", () => {
  const humMenuContent = document.createElement("section");
  const humMenuContentRemove = document.createElement("img");
  const makeToDo = document.createElement("div");
  const makeToDoIcon = document.createElement("img");
  const makeToDoTitle = document.createElement("h2");

  humMenuContentRemove.src =
    "https://img.freepik.com/premium-vector/xgrunge-letter-x-vector-cross-sign-hand-drawn-x_546559-33.jpg";
  makeToDoTitle.innerText = "lägga till lista";
  makeToDoIcon.src =
    "https://www.freeiconspng.com/thumbs/list-icon/to-do-list-icon-buy-this-icon-for--0-48-1.png";

  body.appendChild(humMenuContent);
  humMenuContent.appendChild(humMenuContentRemove);
  humMenuContent.appendChild(makeToDo);
  makeToDo.appendChild(makeToDoIcon);
  makeToDo.appendChild(makeToDoTitle);

  humMenuContent.className = "humMenuContent";
  humMenuContentRemove.className = "humMenuContent__remove";
  makeToDo.className = "humMenuContent__makeToDo";
  makeToDoIcon.className = "humMenuContent__makeToDo--icon";
  makeToDoTitle.className = "humMenuContent__makeToDo--title";

  makeToDo.addEventListener("click", () => {
    humMenuContent.remove();
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

    const deleteDivs = document.createElement("img");
    deleteDivs.className = "divs__deleteDivs";
    deleteDivs.src = xImg;
    divs.appendChild(deleteDivs);

    deleteDivs.addEventListener("click", () => {
      divs.remove();
    });
  });

  humMenuContentRemove.addEventListener("click", () => {
    humMenuContent.remove();
  });
});
*/
const firstList = new TheList(false, "b idag ska jag göra klar min ");
const sList = new TheList(false, "a idag ska jag göra ...");

let lists = [firstList, sList];
headerHtml(lists);
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

let getMonthName = months[d.getMonth()];
export var mainContent = document.createElement("main");
const dateContainer = document.createElement("section");
const monthName = document.createElement("h1");
const weeksContainer = document.createElement("div");
const dayContainer = document.createElement("ul");

monthName.innerText = getMonthName;

mainContent.className = "mainContent";
dateContainer.className = "mainContent__dateContainer";
monthName.className = "dateContainer__monthName";
weeksContainer.className = "dateContainer__weeksContainer";
dayContainer.className = "weeksContainer__days";

body.appendChild(mainContent);
mainContent.appendChild(dateContainer);
dateContainer.appendChild(monthName);
dateContainer.appendChild(weeksContainer);
weeksContainer.appendChild(dayContainer);

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
}

// skriver idag
/* const todayDivTag = document.createElement("div");
const divBtnTag = document.createElement("div");

//todayDivTag.className = "mainContent__todayDivTag";
divBtnTag.className = "mainContent__todayDivTag--divBtnTag";
divBtnTag.innerText = "lägga till lista";

mainContent.appendChild(todayDivTag);
//todayDivTag.appendChild(todayH2Tag);
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
  deleteDivs.src = xImg;
  divs.appendChild(deleteDivs);

  deleteDivs.addEventListener("click", () => {
    divs.remove();
  });
}); */
// skpar en behållare för hela list i main
const listContainer = document.createElement("div");
listContainer.className = "mainContent__listContainer";
mainContent.appendChild(listContainer);

// skapar två nya lista för att exprementera
const doneLists = [];
console.log(doneLists);
export const createNewElemt = () => {
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
console.log("Före anropet:", lists);
createNewElemt();
console.log("Efter anropet:", lists);
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
