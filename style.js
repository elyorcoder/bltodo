// alert("Hi\nHi\nHi\nHi\nHi\nHi\nHi\nHi\nHi")
const block = document.querySelector(".block");
const block2 = document.querySelector(".block2");
const dolist = document.querySelector(".do");
const clear = document.querySelector(".clear");
const save = document.querySelector(".submit");
const form = document.querySelector(".form");
const list = document.querySelector(".list");
let i = 0,
  arr = [];

block2.innerHTML =
  '<div class="block"><input class="do" type="text" value="none" disabled/><input class="clear" type="reset" value="Clear"/></div>';

block2.style.display = "none";
save.addEventListener("click", (e) => {
  e.preventDefault();
  if (!list.value.trim()) {
    alert("bosh maydon");
  } else {
    arr[i] = list.value.trim();
    i++;    

    form.append(block2)
  }
});
