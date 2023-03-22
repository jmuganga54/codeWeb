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
const searchText = document.querySelector("#searchText");

const filter = {
  searchText: "",
};

//adaEventListener
searchText.addEventListener("change", (e) => {
  console.log("Something changed");
  filter.searchText = e.target.value;
  renderNotes(notes, filter);
});

//function call
renderNotes(notes, filter);
