const boxes = document.querySelectorAll(".box");
// fireout an event
window.addEventListener("scroll", checkBoxes);
// first execution
checkBoxes();
//
function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  //  we will loop through each box
  boxes.forEach((box) => {
    // providesinformation about the size of an element and its position relative to the viewport. and we need to know where the top is
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      // we will add the box
      box.classList.add("show");
    } else {
      // we will remove
      box.classList.remove("show");
    }
  });
}
