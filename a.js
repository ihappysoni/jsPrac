// const heading2 = document.getElementsByClassName("hi");
// console.log(heading2[0].innerText);

//array of objects

// let data = document.getElementById("main").innerText;
// let data2 = document.getElementById("main").innerHTML;
// console.log(data);
// console.log(data2);

// function submit() {
//   const value = document.getElementById("main");
//   value.innerText = "marn stack";
// }

function submit() {
  const userInput = document.getElementById("name");
  const todo = document.createElement("h1");
  todo.innerText = userInput.value;
  todo.setAttribute("class", "todoDiv");
  document.getElementById("todoData").appendChild(todo);
}
