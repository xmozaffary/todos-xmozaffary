import "./../scss/style.scss";
import { headerHtml } from "./headerhtml";
import { TheList } from "./models/TheList";

const body = document.querySelector("body");
const d = new Date();

const firstList = new TheList(false, "Idag ska jag göra klar min...");
const secoundList = new TheList(false, "Måste göra ...");
let doneList = [];

let list = [firstList, secoundList];
list.sort((a, b) => a.whatToDo.localeCompare(b.whatToDo));

if (
  JSON.parse(localStorage.getItem("list")) ||
  JSON.parse(localStorage.getItem("doneList"))
) {
  list = JSON.parse(localStorage.getItem("list"));
  doneList = JSON.parse(localStorage.getItem("doneList"));
}

/* if(JSON.parse(localStorage.getItem("doneList"))){
  doneList = JSON.parse(localStorage.getItem("doneList"));
} */
headerHtml(list);
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

const days = ["Sön", "Mån", "Tis", "Ons", "Tors", "Fre", "Lör"];
// loopar genom listan och visar i sidan
for (let i = 0; i < days.length; i++) {
  const dayLi = document.createElement("li");
  dayLi.innerText = days[i];

  dayLi.className = "weeksContainer__days--day";
  dayContainer.appendChild(dayLi);
  // if satsen hittagr dagens index och den indexen får en class
  if (i == d.getDay()) {
    dayLi.classList.add("markToday");
  }
}

const listSection = document.createElement("section");
const listTitle = document.createElement("p");
const row = document.createElement("div");
const col = document.createElement("div");
const listContainer = document.createElement("div");

listTitle.innerText = "Vad behövs göras: ";

listTitle.className = "mainContent__doneListContainer--title";
listSection.className = "container desktop";
row.className = "row desktop__row";
col.className = "col desktop__col";
listContainer.className = "row gap-2";

mainContent.appendChild(listSection);
listSection.appendChild(row);
col.appendChild(listTitle);
row.appendChild(col);
col.appendChild(listContainer);

export const createNewElemt = () => {
  listContainer.innerHTML = "";
  localStorage.setItem("list", JSON.stringify(list));
  for (let i = 0; i < list.length; i++) {
    const listContent = document.createElement("div");
    const checkbox = document.createElement("input");
    const toDoText = document.createElement("p");

    checkbox.addEventListener("click", () => {
      doneList.push(list[i]);
      doneList.sort((a, b) => a.whatToDo.localeCompare(b.whatToDo));
      list.splice(i, 1);
      createNewElemt();
      doneListHtml();
    });

    checkbox.type = "checkbox";
    console.log(list[i]);
    checkbox.checked = list[i].isDone;
    toDoText.innerHTML = list[i].whatToDo;
    listContent.className = "d-flex gap-3 border col-12 align-items-center";
    checkbox.className = "form-check-input";
    toDoText.className = "form-check-label my-2";

    listContainer.appendChild(listContent);
    listContent.appendChild(checkbox);
    listContent.appendChild(toDoText);
  }
  if (listContainer.textContent.trim() == "") {
    const emptyContainr = document.createElement("p");
    emptyContainr.innerHTML = "Listan är tom";
    emptyContainr.className = "my-2";
    listContainer.className = "text-center";
    listContainer.appendChild(emptyContainr);
  }
};

createNewElemt();

const doneLisTitle = document.createElement("p");
const rowD = document.createElement("div");
const colD = document.createElement("div");
const doneListContainer = document.createElement("div");

doneLisTitle.innerText = "Saker som är klar:";

doneLisTitle.className = "mainContent__doneListContainer--title";
rowD.className = "row desktop__row";
colD.className = "col";
doneListContainer.className = "row gap-2";

colD.appendChild(doneLisTitle);
listSection.appendChild(rowD);
rowD.appendChild(colD);
colD.appendChild(doneListContainer);

const doneListHtml = () => {
  doneListContainer.innerHTML = "";
  localStorage.setItem("doneList", JSON.stringify(doneList));
  for (let i = 0; i < doneList.length; i++) {
    const listContent = document.createElement("div");
    const checkbox = document.createElement("input");
    const toDoText = document.createElement("p");

    checkbox.addEventListener("click", () => {
      list.push(doneList[i]);
      list.sort((a, b) => a.whatToDo.localeCompare(b.whatToDo));
      doneList.splice(i, 1);
      createNewElemt();
      doneListHtml();
    });
    checkbox.type = "checkbox";
    toDoText.innerText = doneList[i].whatToDo;
    checkbox.checked = true;

    listContent.className = "d-flex gap-3 border col-12 align-items-center";
    checkbox.className = "form-check-input";
    toDoText.className = "form-check-label my-2";

    doneListContainer.appendChild(listContent);
    listContent.appendChild(checkbox);
    listContent.appendChild(toDoText);
  }
  if (doneListContainer.textContent.trim() == "") {
    const emptyContainr = document.createElement("p");
    emptyContainr.innerHTML = "Listan är tom";
    emptyContainr.className = "my-2";
    doneListContainer.className = "text-center";
    doneListContainer.appendChild(emptyContainr);
  }
};

doneListHtml();
