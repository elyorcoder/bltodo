// alert("Hi\nHi\nHi\nHi\nHi\nHi\nHi\nHi\nHi")
const block = document.querySelector(".block");
const block2 = document.querySelector(".block2");
const save = document.querySelector(".submit");
const form = document.querySelector(".form");
const list = document.querySelector(".list");
const sel = document.querySelector("#level");

save.addEventListener("click", (e) => {
  e.preventDefault();
  if (!list.value.trim()) {
    alert("bosh maydon");
  } else {
    const block3 = document.createElement("div");
    block3.classList.add("block");
    block3.style.display = "flex";

    const elinp = document.createElement("input");
    elinp.type = "text";
    elinp.value = list.value;
    elinp.disabled = true;
    elinp.classList.add("do");

    const select = document.createElement("input");
    select.type = "text";
    select.value = sel.value;
    select.disabled = true;
    select.classList.add("level");

    const clear2 = document.createElement("input");
    clear2.type = "button";
    clear2.value = "Clear";
    clear2.classList.add("clear");

    clear2.addEventListener("click", () => {
      block3.remove();
    });
    block3.append(elinp);
    block3.append(select);
    block3.append(clear2);
    block2.append(block3);
    list.value = "";
  }
});
