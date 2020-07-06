const content = document.querySelector(".content");

const bar = document.createElement("div");
bar.style.height = "4px";
bar.style.width = "0";
bar.style.position = "fixed";
bar.style.top = "0";
bar.style.left = "0";
bar.style.zIndex = "9999";
bar.style.backgroundColor = "#D6000D";
bar.style.transition = "0.2s";
document.querySelector("body").append(bar);

document.addEventListener("scroll", updateBar);

function updateBar() {
  const alturaDaPagina = content.offsetHeight;
  const positionY = window.pageYOffset;
  console.log(positionY);
  const percent = (positionY * 130) / alturaDaPagina;
  bar.style.width = percent + "%";
}
