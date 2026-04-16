const input = document.getElementById("taskInput");
const select = document.getElementById("priority");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

button.addEventListener("click", () => {
    const taskText = input.value.trim();
    const priority = select.value;

    if (taskText === "") return;

    const li = document.createElement("li");
    li.classList.add(priority);

    const content = document.createElement("div");
    content.classList.add("task-content");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = taskText;

    checkbox.addEventListener("change", () => {
        span.classList.toggle("completed");
    });

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remover";

    removeBtn.addEventListener("click", () => {
        li.remove();
    });

    content.appendChild(checkbox);
    content.appendChild(span);

    li.appendChild(content);
    li.appendChild(removeBtn);

    list.appendChild(li);

    input.value = "";
});