// 인풋에 내용을 쓰고 등록 버튼을 클릭하면
// 리스트에 내용이 추가된다.

// const todoList = document.getElementById("todo-input");
const todoInputBySelector = document.querySelector("#todo-input");

const buttonInputBySelector = document.querySelector(".todo-input-button");

const todoListSection = document.querySelector(".todo-list-section");

let ul; // ul 요소의 존재 여부를 추적하기 위한 변수를 선언합니다.

buttonInputBySelector.addEventListener("click", function () {
  if (!ul) {
    // ul이 존재하지 않으면 새로운 ul 요소를 생성하고 todoListSection에 추가합니다.
    ul = document.createElement("ul");
    todoListSection.appendChild(ul);
  }

  // 이후의 코드는 li, label, input, span 요소를 생성하고 추가하는 것으로 이어집니다.
  //input에 값이 없을 때 등록되지 않도록
  const emptyValidator = function (string) {
    return string.trim().length;
  };

  if (emptyValidator(todoInputBySelector.value) === 0) {
    alert("empty");
    return;
  }

  //li 만들기
  const li = document.createElement("li");
  //label 만들기
  const label = document.createElement("label");
  //input 만들기
  const input = document.createElement("input");
  //span 만들기
  const span = document.createElement("span");

  //input에 넣는 값을 todo에 넣기
  const todo = todoInputBySelector.value;
  //todo를 span에 넣기
  span.textContent = todo;

  //li를 ul의 자식으로 넣기
  ul.appendChild(li);
  //label을 li의 자식으로 넣기
  li.appendChild(label);
  //input이랑 span을 label의 자식으로 넣기
  label.append(input, span);

  //input type을 checkbox로 변경하기
  input.setAttribute("type", "checkbox");
  //li class명 부여하기
  li.classList.add("todo-item");

  // 입력 필드 값을 초기화합니다.
  todoInputBySelector.value = "";
});
