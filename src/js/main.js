import "./../scss/style.scss";
import { headerHtml } from "./headerhtml";
import { TheList } from "./models/TheList";

const body = document.querySelector("body");
const d = new Date();

const firstList = new TheList(false, "Idag ska jag göra klar min ");
const sList = new TheList(false, "Måste göra ...");
const doneLists = [];

let lists = [firstList, sList];
lists.sort((a, b) => a.whatToDo.localeCompare(b.whatToDo));
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
mainContent.appendChild(listSection);

const pTagTitle = document.createElement("p");
pTagTitle.className = "mainContent__doneListContainer--title";
pTagTitle.innerText = "Vad behövs göras: ";
listSection.appendChild(pTagTitle);

const listContainer = document.createElement("div");
listContainer.className = "mainContent__listContainer";
listSection.appendChild(listContainer);

export const createNewElemt = () => {
  listContainer.innerHTML = "";
  for (let i = 0; i < lists.length; i++) {
    const list = document.createElement("div");
    const checkbox = document.createElement("input");
    const toDoText = document.createElement("p");

    checkbox.addEventListener("click", () => {
      doneLists.push(lists[i]);
      doneLists.sort((a, b) => a.whatToDo.localeCompare(b.whatToDo));
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
listSection.appendChild(doneLisTitle);

const doneListContainer = document.createElement("div");
doneListContainer.className = "mainContent__doneListContainer";
listSection.appendChild(doneListContainer);

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
      lists.sort((a, b) => a.whatToDo.localeCompare(b.whatToDo));
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
