const myLibrary = [];

 const shelf = document.querySelector("main");

function Book(author, title, pages, readStatus = false) {
    if(!new.target) {
        throw Error("You forgot set propety 'name' ")
    }
   this.author = author,
   this.title = title,
   this.pages = pages,
   this.readStatus = readStatus,
   this.toggleReadStatus = function () {
     this.readStatus ? this.readStatus = false : this.readStatus = true;
   }
}



function addBook(author, title, pages) {
  const book = new Book(author, title, pages);
        book.uniqueID = crypto.randomUUID();
   const bookContainer = document.createElement("div");
      bookContainer.classList.add("book-container");
      bookContainer.setAttribute("id", `${book.uniqueID}`)

const authorOfBook = document.createElement("p");
      authorOfBook.classList.add("book-author");
      authorOfBook.textContent = book.author;
      bookContainer.appendChild(authorOfBook);

const titleOfBook = document.createElement("p");
      titleOfBook.classList.add("book-title");
      titleOfBook.textContent = book.title;
      bookContainer.appendChild(titleOfBook);

const pagesOfBook = document.createElement("p");
      pagesOfBook.classList.add("book-pages");
      pagesOfBook.textContent = book.pages;
      bookContainer.appendChild(pagesOfBook);

const toggleCheck = document.createElement("input");
      toggleCheck.setAttribute("type", "checkbox");
      toggleCheck.addEventListener("click", function() {
        this.checked ? book.toggleReadStatus() : book.toggleReadStatus()
      })
      bookContainer.appendChild(toggleCheck)

const deleteBtn = document.createElement("button");
      deleteBtn.setAttribute("type", "button");
      deleteBtn.classList.add("deleteBtn");
      deleteBtn.textContent = "X"
      deleteBtn.addEventListener("click", function() {
        for(let i = 0; i < myLibrary.length; i++) {
          if(myLibrary[i].uniqueID === this.parentElement.id) {
             myLibrary.splice(i, 1)
          }
        }
        
         shelf.removeChild(this.parentElement)
         
      })
      bookContainer.appendChild(deleteBtn);

      myLibrary.push(book)
      shelf.appendChild(bookContainer)
}



function callForm() {
  
const form = document.createElement('form');
      form.classList.add("form-container");
      shelf.appendChild(form);

const containerAuthor = document.createElement("div");
      containerAuthor.classList.add("container-author", "container-input");
const labelAuthor = document.createElement("label");
      labelAuthor.setAttribute("name", "author");
      labelAuthor.textContent = "Author";
const inputAuthor = document.createElement("input");
      inputAuthor.setAttribute("id", "author");
containerAuthor.appendChild(labelAuthor);
containerAuthor.appendChild(inputAuthor);

const containerTitle = document.createElement("div");
      containerTitle.classList.add("container-title", "container-input");
const labelTitle = document.createElement("label");
      labelTitle.setAttribute("name", "title");
      labelTitle.textContent = "Title";
const inputTitle = document.createElement("input");
      inputTitle.setAttribute("id", "title");
containerTitle.appendChild(labelTitle);
containerTitle.appendChild(inputTitle);

const containerPages = document.createElement("div");
      containerPages.classList.add("container-pages", "container-input");
const labelPages = document.createElement("label");
      labelPages.setAttribute("name", "pages");
      labelPages.textContent = "Pages";
const inputPages = document.createElement("input");
      inputPages.setAttribute("id", "pages");
      inputPages.setAttribute("type", "number")
containerPages.appendChild(labelPages);
containerPages.appendChild(inputPages);

const addBtn = document.createElement("button");
      addBtn.setAttribute("type", "button")
      addBtn.textContent = "ADD";
      addBtn.classList.add("addBtn");

form.appendChild(containerAuthor)
form.appendChild(containerTitle)
form.appendChild(containerPages)
form.appendChild(addBtn)

addBtn.addEventListener("click", function() {
  let authorField = inputAuthor.value;
let titleField = inputTitle.value;
let pagesField = inputPages.value;
  addBook(authorField, titleField, pagesField)
  shelf.removeChild(form)
  }
 )
}



const btnCall = document.querySelector(".callForm");
btnCall.addEventListener('click', callForm);