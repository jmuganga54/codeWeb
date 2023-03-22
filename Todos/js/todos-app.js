let todos = [
  {
    text: "Order cat food",
    completed: false,
  },
  {
    text: "Clean Kitchen",
    completed: true,
  },
  {
    text: "Buy food",
    completed: false,
  },
  {
    text: "Do work",
    completed: false,
  },
  {
    text: "Exercise",
    completed: true,
  },
];

//Variables
const bodyEl = document.querySelector("body");
const divEl = document.querySelector("#display-incomplete");
const todosContainer = document.querySelector("#search-todo");
const todoSearched = document.querySelector("#type-todo");
const searchTodo = document.querySelector("#search-todo");
const hideCompleted = document.querySelector("#hide-completed");
const formEl = document.querySelector("form");

const filterTodos = {
  searchText: "",
  hideCompleted: false,
};

//Function
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

//addEventListener
todoSearched.addEventListener("input", (e) => {
  filterTodos.searchText = e.target.value;
  console.log(filterTodos);
  debugger;
  renderTodos(todos, filterTodos);
});

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  todos.push({
    text: e.target.elements.todoText.value,
    completed: false,
  });
  e.target.elements.todoText.value = "";
  renderTodos(todos, filterTodos);
});

hideCompleted.addEventListener("change", (e) => {
  filterTodos.hideCompleted = e.target.checked;
  console.log(filterTodos);
  renderTodos(todos, filterTodos);
});

//call function
renderTodos(todos, filterTodos);
