const button = document.querySelector(".button");
const search = document.querySelector(".search");
button.addEventListener("click", () => {
  update();
});
function update() {
  if (search.classList.contains("active")) {
    search.classList.remove("active");
  } else {
    search.classList.add("active");
  }
}
