console.log("project 2");
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;

}

function Display() {

}
Display.prototype.add = function (book) {
    console.log("add book");
    tablebody = document.getElementById("tablebody");
    let uistring = `<tr>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
  </tr>`;
  tablebody.innerHTML+=uistring;

}


Display.prototype.clear = function () {
    let libraryformsubmit = document.getElementById("libraryform");
    libraryform.reset();
}
// add methods to type
// add submit form



let libraryform = document.getElementById('libraryform');
libraryform.addEventListener('submit', libraryformsubmit);

function libraryformsubmit(e) {
    console.log("form submitted");
    e.preventDefault();

    let name = document.getElementById("inputname").value;
    let author = document.getElementById("inputauthor").value;
    let fiction = document.getElementById("fiction");
    let programming = document.getElementById("programming");
    let cooking = document.getElementById("cooking");

    let type;
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    display.add(book);
    display.clear();

}