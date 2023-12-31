import { createNewElemt } from "./main";
import { TheList } from "./models/TheList";

export const headerHtml = (list) => {
  const d = new Date();
  // börjar med header taggar
  const header = document.createElement("header");
  const humMenu = document.createElement("div");
  const userName = document.createElement("h1");
  const userImg = document.createElement("img");

  userImg.src =
    "https://www.shareicon.net/data/512x512/2016/05/24/770046_people_512x512.png";
  userName.innerText = "HEJ NAMN";
  humMenu.className = "header__humMenu";
  header.className = "header";
  userName.className = "header__name";
  userImg.setAttribute("class", "header__img");

  document.body.appendChild(header);
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
    const humMenuContentRemove = document.createElement("p");
    const makeToDo = document.createElement("div");
    const makeToDoIcon = document.createElement("p");
    const makeToDoTitle = document.createElement("h2");

    // humMenuContentRemove.className = "bi bi-send";
    makeToDoTitle.innerText = "Skapa en Todo";
    document.body.appendChild(humMenuContent);
    humMenuContent.appendChild(humMenuContentRemove);
    humMenuContent.appendChild(makeToDo);
    makeToDo.appendChild(makeToDoIcon);
    makeToDo.appendChild(makeToDoTitle);

    humMenuContent.className = "humMenuContent";
    humMenuContentRemove.className = "humMenuContent__remove bi bi-x-circle";
    makeToDo.className = "humMenuContent__makeToDo";
    makeToDoIcon.className =
      "humMenuContent__makeToDo--icon bi bi-card-checklist";
    makeToDoTitle.className = "humMenuContent__makeToDo--title";

    makeToDo.addEventListener("click", () => {
      humMenuContent.remove();
      const getToDoFromUser = document.createElement("div");
      getToDoFromUser.className = "getToDoFromUser";
      document.body.appendChild(getToDoFromUser);

      const labelTag = document.createElement("label");
      const inputTag = document.createElement("input");
      const buttonTag = document.createElement("button");

      buttonTag.setAttribute("type", "button");
      buttonTag.setAttribute("class", "getToDoFromUser__btn");

      labelTag.setAttribute("for", "name");
      labelTag.setAttribute("class", "getToDoFromUser__label");

      inputTag.setAttribute("type", "text");
      inputTag.setAttribute("id", "name");
      inputTag.setAttribute("class", "getToDoFromUser__input");

      labelTag.innerHTML = "Vad vill du göra? ";
      buttonTag.innerHTML = "okej";

      getToDoFromUser.appendChild(labelTag);
      getToDoFromUser.appendChild(inputTag);
      getToDoFromUser.appendChild(buttonTag);

      buttonTag.addEventListener("click", () => {
        if (inputTag.value == "") {
          alert("Du måste skriva vad ska du göra!");
        } else {
          const inutValue = inputTag.value;
          var userList = new TheList(false, inutValue);
          list.push(userList);
          list.sort((a, b) => a.whatToDo.localeCompare(b.whatToDo));
          createNewElemt();
        }
      });

      const deleteDivs = document.createElement("p");
      deleteDivs.className = "getToDoFromUser__deleteDivs bi bi-x-circle";
      getToDoFromUser.appendChild(deleteDivs);

      deleteDivs.addEventListener("click", () => {
        getToDoFromUser.remove();
      });
    });

    humMenuContentRemove.addEventListener("click", () => {
      humMenuContent.remove();
    });
  });
};
