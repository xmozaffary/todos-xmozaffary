export const doneListHtml = (doneLists) => {
  const list = document.createElement("div");
  const checkbox = document.createElement("input");
  const toDoText = document.createElement("p");

  checkbox.type = "checkbox";
  toDoText.innerHTML = doneLists.whatToDO;
  checkbox.checked = true;

  list.className = "mainContent__listContainer--list";
  checkbox.className = "mainContent__listContainer--list__checkbox";
  toDoText.className = "mainContent__listContainer--list__toDoText";

  document.body.appendChild(list);
  list.appendChild(checkbox);
  list.appendChild(toDoText);
};
