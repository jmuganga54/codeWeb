const renderTodos = (todos, filter) => {
    const incompletedTodosArray = todos.filter((todo) => {
      return !todo.completed;
    });
  
    const headingEl = document.createElement("h2");
    divEl.innerHTML = "";
  
    incompletedTodosArray.length === 1
      ? (headingEl.textContent = `You have ${incompletedTodosArray.length} todo which is incompleted`)
      : (headingEl.textContent = `You have ${incompletedTodosArray.length} todos which are incompleted`);
  
    divEl.appendChild(headingEl);
  
    const filterTodoArray = todos.filter((todo) => {
      let matchedTodo = todo.text
        .toLowerCase()
        .includes(filter.searchText.toLowerCase());
      let hideCompletedMatched = !todo.completed || !filter.hideCompleted;
      return matchedTodo && hideCompletedMatched;
    });
  
    console.log(filterTodoArray);
    searchTodo.innerHTML = "";
    filterTodoArray.forEach((todo) => {
      const paraEl = document.createElement("p");
      paraEl.textContent = todo.text;
      searchTodo.appendChild(paraEl);
    });
  };