const menu = document.querySelector("#menu");
if (menu) {
  menu.addEventListener("click", function () {
    const ul = document.querySelector("nav ul");
    const link = document.querySelector("nav a.btn");

    if (ul.classList.contains("visible")) {
      ul.classList.remove("visible");
      link.classList.remove("visible");
    } else {
      ul.classList.add("visible");
      link.classList.add("visible");
    }
  });
}

const listMenu = document.querySelectorAll("nav ul li a");
if (listMenu) {
  listMenu.forEach((item, i) => {
    item.addEventListener("click", function (e) {
      const currentActiveMenu = document.querySelector(".active");
      currentActiveMenu.classList.remove("active");
      e.target.classList.add("active");
    });
  });
}
