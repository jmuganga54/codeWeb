const notes = [
  {
    title: "My next trip",
    body: "I would like to go to Spain",
  },
  {
    title: "Habits to work on",
    body: "Exercise, Eating a bit better",
  },
  {
    title: "Office modifications",
    body: "Get a new seat",
  },
];

//Variables
const notesContainer = document.querySelector("#notes");
const filter = {
  searchText: "",
};

//Functions
const renderNotes = (notes, filter) => {
  const filterNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(filter.searchText.toLowerCase());
  });

  notesContainer.innerHTML = "";
  filterNotes.forEach((filterNote) => {
    const noteEl = document.createElement("p");
    noteEl.textContent = filterNote.title;
    notesContainer.appendChild(noteEl);
  });
};

//adaEventListener
document.querySelector("#searchText").addEventListener("change", (e) => {
  console.log("Something changed");
  filter.searchText = e.target.value;
  renderNotes(notes, filter);
});
