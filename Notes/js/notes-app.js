"use strict";

//Reading the existing notes from localStorage
const notes = getSavedNotes();

//Variables
const notesContainer = document.querySelector("#notes");

//filter object
// When searching for notes, you can use text: searchText or  sortBy: byEdited
const filter = {
  searchText: "",
  sortBy: "byEdited"
};

//render notes
renderNotes(notes, filter);

//adaEventListener

//When searchText input is changed
document.querySelector("#searchText").addEventListener("change", (e) => {
  //capture the value entered, assign it to filter.searchText
  filter.searchText = e.target.value;
  //render notes again, according to the filter array
  renderNotes(notes, filter);
});

//When createNotes button is clicked.
document.querySelector("#createNotes").addEventListener("click", (e) => {
  //create an id, which will be assign to newly created note
  const id = uuidv4();
  //create a timestamp, on when the notes were created
  const timestamp = moment().valueOf();

  //push the create note to [notes] array
  notes.push({
    id: id,
    title: "",
    body: "",
    createdAt: timestamp,
    updateAt: timestamp,
  });

  //saved notes, saving the [notes] array to localStorage after new notes being pushed
  saveNotes(notes);

  //send to another page
  location.replace("./edit.html");
});

//when sortBy select is changed
document.querySelector("#filter-by").addEventListener("change", (e) => {
  //capture the value selected and assign it to the filter object
  filter.sortBy = e.target.value;

  //render the notes again, based on the select
  renderNotes(notes, filter);
});
