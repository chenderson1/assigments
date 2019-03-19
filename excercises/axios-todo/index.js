//grab elements
const ul = document.querySelector(".todos-list");
let checkboxInput;

//create variables
const todoList = [];

//grab data
axios
  .get("https://api.vschool.io/cory/todo")
  .then(response => {
    response.data.map(todo => todoList.push(todo));
  })
  .then(() => {
    displayList();
  });

function addTodo(e) {
  e.preventDefault();
  const title = document.todo.title.value;
  const description = document.todo.desc.value;
  const price = document.todo.price.value;
  const imgUrl = document.todo.imgUrl.value;

  const body = {
    title,
    description,
    price,
    imgUrl
  };
  axios.post("https://api.vschool.io/cory/todo", body).then(res => {
    displayList(res.data);
  });
}

function createTodo(todo) {
  const li = document.createElement("li");
  const h3 = document.createElement("h3");
  const btn = document.createElement("button");
  const priceP = document.createElement("p");
  const descP = document.createElement("p");
  const img = document.createElement("img");
  const label = document.createElement("label");
  const input = document.createElement("input");
  const avatar = "https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image";
  const imgUrl = todo.imgUrl || avatar;

  //add attributes/class
  priceP.className = "price";
  descP.className = "desc";
  input.setAttribute("type", "checkbox");
  input.className = "checkbox";
  img.setAttribute(
    "src",
    "https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image"
  );
  //add static values
  btn.innerText = "X";
  priceP.innerHTML = "<span>Price:</span>";
  descP.innerHTML = "<span>Desc:</span>";
  label.textContent = "Task Complete";
  label.appendChild(input);
  //   label.innerHTML('<input type="checkbox" />Task Complete');
  //build li
  li.appendChild(h3);
  li.appendChild(btn);
  li.appendChild(priceP);
  li.appendChild(descP);
  li.appendChild(img);
  li.appendChild(label);
  //add data
  h3.innerText = `${todo.title}`;
  priceP.querySelector("span").innerText = `Price: ${todo.price}`;
  descP.querySelector("span").innerText = `Desc: ${todo.description}`;
  img.setAttribute("src", `${imgUrl}`);
  input.checked = todo.completed;
  checkboxInput = document.querySelector(".checkbox");

  return li;
}

function displayList(singleTodo) {
  if (singleTodo) {
    ul.appendChild(createTodo(singleTodo));
  } else {
    todoList.map(todo => ul.appendChild(createTodo(todo)));
  }
}

function isCompleted(e) {
  //if e.target.parentNode.children[0].type === 'checkbox'
  if (e.target.parentNode.children[0].type === "checkbox") {
    let index = todoList.findIndex(
      todo =>
        (todo.title = e.target.parentNode.parentNode.children[0].innerText)
    );

    const body = {
      completed: !todoList[index].completed
    };
    axios
      .put(`https://api.vschool.io/cory/todo/${todoList[index]._id}`, body)
      .then(() => {
        todoList[index].completed = !todoList[index].completed;
      });
  }
}

function deleteTodo() {}

//event listners
document.todo.addEventListener("submit", addTodo);

ul.addEventListener("change", isCompleted);
