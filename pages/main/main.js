const navigationItems = document.querySelectorAll(".navigation__item_link");
const navigation = Array.from(navigationItems);
const prices = document.querySelectorAll(".price");
const pricesArr = [...prices];

function addAndRemoveClass(classList, className) {
  classList.map((item) => {
    item.addEventListener("click", () => {
      classList.map((el) =>
        item.textContent === el.textContent
          ? el.classList.add(className)
          : el.classList.remove(className)
      );
    });
  });
}

addAndRemoveClass(navigation, "active-link");
addAndRemoveClass(pricesArr, "active-price");
