
// add slider to control hslColor


const slider = document.getElementById("brightness-slider");
slider.addEventListener("input", () => {
  const brightness = slider.value / 100; 
  const hslColor = tinycolor(color).toHsl();
  hslColor.l = brightness;
  const newColor = tinycolor(hslColor).toHexString();
  el.style.color = newColor;
});