//grab elements
const ul = document.querySelector(".todos-list");
let checkboxInput;

//create variables
const todoList = [];

//grab data then display
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
  // grab input values
  const title = document.todo.title.value;
  const description = document.todo.desc.value;
  const price = document.todo.price.value;
  const imgUrl = document.todo.imgUrl.value;
  //build user info object
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

  //build li
  li.appendChild(h3);
  li.appendChild(btn);
  li.appendChild(priceP);
  li.appendChild(descP);
  li.appendChild(img);
  li.appendChild(label);
  //add data to elements
  h3.innerText = `${todo.title}`;
  priceP.querySelector("span").innerText = `Price: ${todo.price}`;
  descP.querySelector("span").innerText = `Desc: ${todo.description}`;
  img.setAttribute("src", `${imgUrl}`);
  input.checked = todo.completed;
  //dynamic element event listeners
  input.addEventListener("click", e => isCompleted(e, todo._id));
  btn.addEventListener("click", e => deleteTodo(e, todo._id));

  return li;
}

function displayList(singleTodo) {
  if (singleTodo) {
    ul.appendChild(createTodo(singleTodo));
  } else {
    todoList.map(todo => ul.appendChild(createTodo(todo)));
  }
}

function isCompleted(e, id) {
  todoList.map(item => {
    if (item._id === id) {
      axios
        .put(`https://api.vschool.io/cory/todo/${item._id}`, {
          completed: !item.completed
        })
        .then(res => {
          todoList.map(item => {
            if (item._id === id) {
              item.completed = !item.completed;
            }
          });
          alert("Todo complete status has changed");
        });
    }
  });
}
function deleteTodo(e, id) {
  todoList.map(item => {
    if (item._id === id) {
      axios.delete(`https://api.vschool.io/cory/todo/${item._id}`).then(res => {
        todoList.map(item => {
          if (item._id === id) {
            e.target.parentNode.remove();
          }
        });
        alert("Todo has been removed");
      });
    }
  });
}

//form listners
document.todo.addEventListener("submit", addTodo);
