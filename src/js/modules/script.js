// Меню-бургер
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}

//======Прокрутка в начало страницы===================================================
const headerHeight = document.querySelector(".header").offsetHeight;
const backToHeader = document.querySelector(".comeback");

document.addEventListener("scroll", (e) => {
  const offsetTop = document.documentElement.scrollTop;

  if (offsetTop >= headerHeight) {
    backToHeader.classList.add("_active");
    backToHeader.onclick = (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  } else {
    backToHeader.classList.remove("_active");
  }
});

//====Добавление copyright=====================================================
const footer = document.querySelector("footer");
if (footer) {
  const addCopyright = () => {
    const year = new Date().getFullYear();
    const div = document.createElement("div");
    div.className = "footer__copy";
    div.innerHTML = `Copyright © ${year} psy-ivd | dav-studio`;
    footer.append(div);
  };
  addCopyright();
}
