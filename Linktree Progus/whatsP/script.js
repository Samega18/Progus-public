const preHeaders = document.getElementsByClassName("preHeader");
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  const currentScrollTop = window.scrollY;

  for (const preHeader of preHeaders) {
    if (currentScrollTop > 35) {
      preHeader.classList.add("active");
    } else if (currentScrollTop <= 35) {
      preHeader.classList.remove("active");
    }
  }

  if (currentScrollTop < lastScrollTop) {
    for (const preHeader of preHeaders) {
      preHeader.classList.remove("active");
    }
  }

//   lastScrollTop = currentScrollTop;
});