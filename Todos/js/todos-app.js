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
