let MyLibrary = [];
index = 0;
function Book(title, author, pages, read, remove) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.remove = remove;
}

function addBookToLibrary(title, author, pages, read, remove) {
  let book = new Book(title, author, pages, read, remove);
  MyLibrary.push(book);
}

function displayBookOnPage() {
  const books = document.querySelector(".books");
  removeAllChildNodes(books);

  MyLibrary.forEach((MyLibrary) => {
    const card = document.createElement("div");
    card.classList.add("card");
    console.log(card);
    books.appendChild(card);

    index++;

    for (let key in MyLibrary) {
      if (key == "remove") {
        const rm = document.createElement("button");
        rm.classList.add("remove");
        rm.textContent = `remove`;
        card.appendChild(rm);

        rm.onclick = function () {};
        continue;
      }
      if (key == "read") {
        const btn = document.createElement("button");
        btn.classList.add("button");

        if (MyLibrary[key]) {
          btn.classList.add("check");
          btn.textContent = `${key}`;
          card.appendChild(btn);
          btn.onclick = function () {
            console.log(1000);
            let hasClass = btn.classList.contains("check");
            if (hasClass) {
              btn.classList.remove("check");
              btn.classList.add("uncheck");
              btn.textContent = `not ${key}`;
            } else {
              btn.classList.remove("uncheck");
              btn.classList.add("check");
              btn.textContent = `${key}`;
            }
          };
          continue;
        } else {
          btn.classList.add("uncheck");
          btn.textContent = `not ${key}`;
          card.appendChild(btn);
          btn.onclick = function () {
            console.log(1000);
            let hasClass = btn.classList.contains("uncheck");
            if (hasClass) {
              btn.classList.remove("uncheck");
              btn.classList.add("check");
              btn.textContent = `${key}`;
            } else {
              btn.classList.remove("check");
              btn.classList.add("uncheck");
              btn.textContent = `not ${key}`;
            }
          };
          continue;
        }
      }
      const para = document.createElement("p");
      para.textContent = `${key}: ${MyLibrary[key]}`;
      card.appendChild(para);
    }
  });
}

function addForm() {
  const form = document.querySelector("form");

  const title = form.elements.title.value;
  const author = form.elements.author.value;
  const pages = form.elements.pages.value;
  const read = document.getElementById("read").checked;
  const remove = true;
  console.log(read.checked);

  addBookToLibrary(title, author, pages, read, remove);
  displayBookOnPage();

  console.log(MyLibrary);
}

function resetForm() {
  document.getElementById("myForm").reset();
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

console.log("End of code array contents", MyLibrary);
