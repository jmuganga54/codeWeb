const getSavedNotes = () => {
  //get the notes using name of the note ('notes`) in JSON
  const notesJSON = localStorage.getItem("notes");

  try {
    //return JSobject of notes [JSON.parse(notesJSON)], if notesJSON is true, else return empty array []
    return notesJSON ? JSON.parse(notesJSON) : [];
  } catch (e) {
    return [];
  }
};


 const saveNotes = (notes)=>{
  localStorage.setItem('notes', JSON.stringify(notes))
 }
/**
 *
 * @param {array} notes - contain the notes
 * @param {object} filter - filter object: searchText, sortBy
 * This function will render notes on the screen
 */
const renderNotes = (notes, filter) => {
  //filter notes according the the filter text
  const filterNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(filter.searchText.toLowerCase());
  });

  notesContainer.innerHTML = "";

  //render each notes to notesContainer
  filterNotes.forEach((filterNote) => {
    //creating an element p
    const noteEl = document.createElement("p");
    //putting the title of the notes
    noteEl.textContent = filterNote.title;
    //append it to the notesContainer
    notesContainer.appendChild(noteEl);
  });
};
