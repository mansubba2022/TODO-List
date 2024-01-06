let todoList;
displayTodo();
function addTodo() {
  let c = localStorage.getItem("todoList");
  // console.log(String(c)==="undefined");
  if (String(c) === "undefined") {
    console.log("inside c....." + c);
    todoList = [];
  }
  else {
    console.log("im here");
    todoList = JSON.parse(localStorage.getItem("todoList"));
  }

  let content = document.querySelector("#ip").value;
  let date = document.querySelector("#dt").value;
  let input = (content && date) ? { content: `${content}`, date: `${date}` } : false;

  if (input != false) {
    todoList.push(input);
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }

  displayTodo();
}

function displayTodo() {
  todoList = JSON.parse(localStorage.getItem("todoList"));

  document.querySelector("#item-container").innerHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    let { content, date } = todoList[i];
    document.querySelector("#item-container").innerHTML += `
      <span>${content}</span>
      <span>${date}</span>
      <button id="del" onclick='todoList.splice(${i}, 1); localStorage.setItem("todoList", JSON.stringify(todoList)); displayTodo();'>
        Delete
      </button>`;
  }
}

