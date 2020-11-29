let addBtn = document.getElementById('addBtn');
showNotes();

// Add Notes Here to Localstorage Using this function
addBtn.addEventListener("click", function (e) {

    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = "";
    // console.log(notesObj);
    showNotes();
});

// Show Notes Here From Localstorage Using this function
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
            <div class="noteCard m-2 card">
                <div class="card-body">
                    <h5 class="card-title font-weight-bold">Note ${index + 1}</h5>
                    <p class="card-text">${element}</p>
                    <button onclick="delNoteAlert(this.id)" id="${index}" class="btn btn-outline-danger">Delete Note</button>
                </div>
            </div>`
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `<div style="margin-left:15px" class="container-fluid alert alert-danger" role="alert">
        <h4 class="alert-heading font-weight-bold">Sorry !</h4>
        <p>Nothing to show Here !</p>
        <hr>
        <p class="mb-0">Use Add notes box to add data and show here..</p>
      </div>`
    }
}

// Delete Notes Here From LocalStorage Using this function

function delNoteAlert() {
    let confirmDel = window.confirm('Are you sure you want to delete note ?');
    if (confirmDel) {
        delNote()
    }
}

function delNote(index) {
    // console.log("I am delete funtion")
    let = notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}

let search = document.getElementById('searchTxt');

search.addEventListener("input", function () {

    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard');

    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName('p')[0].innerHTML.toLowerCase();

        // console.log(cardTxt);
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    })
})