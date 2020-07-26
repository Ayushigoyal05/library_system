console.log("implementation using class");
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }



}


class Display {
    add(book) {
        console.log("add book");
        let tablebody = document.getElementById("tablebody");
        let uistring = `<tr>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
      </tr>`;
        tablebody.innerHTML += uistring;

    }

    clear() {
        let libraryformsubmit = document.getElementById("libraryform");
        libraryform.reset();
    }

    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        }
        else {
            return true;
        }
    }

    show(type, dismessage) {
        let msg = document.getElementById("msg");
        console.log(msg);
        msg.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>${dismessage}</strong> You should check in on some of those fields below.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`
        setTimeout(function () {
            msg.innerHTML = ""
        }, 50000);
    }

}

// display=new Display();
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
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show("success", "Your book has been added successfully");
    }
    else {
        // shoe error to
        display.show("danger", "sorry you canot add this book");
    }


}