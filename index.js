document.getElementById("add").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addList();
  }
});

function addList() {
  let text = document.getElementById("add").value;
  if (text == "") {
    alert("ERROR - Blank Input");
  } else {
    document.getElementById("supercontainer").innerHTML += `
    <div id="filled">
    <div class="checking">
      <input type="checkbox" class="checkboxRound" />
      <div class="checkNumber">
        <span id="taskText">${text}</span>
      </div>
    </div>
    <img src="photos/trash.svg" alt="trash" class="trashImage">
    </div>`;
    let x = Number(document.getElementById("numCurrent").textContent);
    x++;
    document.getElementById("numCurrent").innerText = x;
    if (x == 1) {
      let elementToHide = document.querySelector(".tasks__blank");
      elementToHide.style.display = "none";
    }
    document.getElementById("add").value = "";
  }
}

document.getElementById("supercontainer").addEventListener("click", function (event) {
    if (event.target.classList.contains("trashImage")) {
      let inputValue = event.target.parentElement.querySelector("input");
      if (inputValue.checked == true) {
        let doneText = Number(
          document.getElementById("numCompleted").textContent
        );
        doneText--;
        document.getElementById("numCompleted").innerText = doneText;
      }

      event.target.parentElement.remove();
      let x = Number(document.getElementById("numCurrent").textContent);
      x--;
      document.getElementById("numCurrent").innerText = x;

      if (x == 0) {
        let elementToHide = document.querySelector(".tasks__blank");
        elementToHide.style.display = "flex";
      }
    }
  });

document.getElementById("supercontainer").addEventListener("change", function (event) {
    if (event.target.classList.contains("checkboxRound")) {
      const taskText = event.target
        .closest("#filled")
        .querySelector("#taskText");
      let doneText = Number(
        document.getElementById("numCompleted").textContent
      );
      if (event.target.checked) {
        taskText.classList.add("done");
        doneText++;
      } else {
        taskText.classList.remove("done");
        doneText--;
      }
      document.getElementById("numCompleted").innerText = doneText;
    }
  });
