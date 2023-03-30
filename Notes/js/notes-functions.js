/**
 *
 * @returns array of notes
 */
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

/**
 *
 * @param {*} notes - notes will be saved to the localStorage
 *
 */
const saveNotes = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};

/**
 *
 * @param {array} notes - array of notes
 * @param {object} filter - object which contain filter option
 * @returns array of notes sorted according
 */
const sortNotes = (notes, sortBy) => {
  if (sortBy == "byEdited") {
    return notes.sort((a, b) => {
      if (a.updateAt > b.updateAt) {
        return -1;
      } else if (a.updateAt < b.updateAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy == "byCreated") {
    return notes.sort((a, b) => {
      if (a.createAt > b.createdAt) {
        return -1;
      } else if (a.createAt < b.createAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === "alphabetical") {
    return notes.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
    return [];
  }
};

/**
 *
 * @param {array} notes - contain the notes
 * @param {object} filter - filter object: searchText, sortBy
 * This function will render notes on the screen based on filter options
 */
const renderNotes = (notes, filter) => {
  notes = sortNotes(notes, filter.sortBy);

  //filter notes according the the filter text
  const filterNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(filter.searchText.toLowerCase())
  );

  notesContainer.innerHTML = "";

  if (filterNotes.length > 0) {
    //render each notes to notesContainer
    filterNotes.forEach((filterNote) => {
      //creating an element p
      const noteEl = document.createElement("p");
      //putting the title of the notes
      noteEl.textContent = filterNote.title;
      //append it to the notesContainer
      notesContainer.appendChild(noteEl);
    });
  } else {
    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = "No notes to show";
    notesContainer.appendChild(emptyMessage);
  }
};
