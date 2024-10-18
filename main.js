const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const papers = document.querySelectorAll("#date");
let i;

btn.addEventListener("click", () => {
  if (container.classList.contains("active")) {
    container.classList.remove("active");
  } else {
    container.classList.add("active");
  }
});

var date = new Date();
for (i = 0; i < papers.length; i++) {
  papers[i].innerHTML =
    "Date: " +
    date.getDate() +
    "/" +
    (date.getMonth() + 1) +
    "/" +
    date.getFullYear();
}
