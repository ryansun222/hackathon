// change colors on page
// grab all the elements on the page
const elements = document.querySelectorAll('*');
const body = document.querySelector('body');
//// content-script.js ////

for (const el of elements) {
    // get the converted color number
    const color = getComputedStyle(el).color;
    
    //convert color to HSL
    const hslColor = tinycolor(color).toHsl();

    //adjust brightness of color
    hslColor.l += 0.5;

    //convert hsl color back to css
    const newColor = tinycolor(hslColor).toHexString();

    //reapply new color
    el.style.color = newColor;
}


// add random bongo cat to page
// const bongo = document.createElement('img');
// bongo.setAttribute('src', 'image/Bongo_Cat_Redraw.png');
// document.body.appendChild(bongo);