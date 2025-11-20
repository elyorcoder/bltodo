// alert("Hi\nHi\nHi\nHi\nHi\nHi\nHi\nHi\nHi")
const block = document.querySelector(".block");
const block2 = document.querySelector(".block2");
const save = document.querySelector(".submit");
const form = document.querySelector(".form");
const list = document.querySelector(".list");

save.addEventListener("click", (e) => {
  e.preventDefault();
  if (!list.value.trim()) {
    alert("bosh maydon");
  } else {
    const block3 = document.createElement("div");
    block3.classList.add("block");
    block3.style.display="flex"

    const elinp = document.createElement("input");
    elinp.type = "text";
    elinp.value = list.value;
    elinp.disabled = true; 
    elinp.classList.add("do");

    const clear2 = document.createElement("input");
    clear2.type = "button";
    clear2.value = "Clear";
    clear2.classList.add("clear");

    clear2.addEventListener("click", () => {
      block3.remove();
    });

    block3.append(elinp, clear2);
    block2.append(block3);

    list.value = "";
  }
});
