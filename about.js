let senteces = document.querySelectorAll(".underlined--gradient");

for (let i = 0; i < senteces.length; i++) {
  senteces[i].addEventListener("mouseover", function () {
    senteces[i].style.backgroundImage = "linear-gradient(to right, yellow 0, lightgreen 100%)";
    senteces[i].style.backgroundPosition = "0 -0.1em";
  });
}
