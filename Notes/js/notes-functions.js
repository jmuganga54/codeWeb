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