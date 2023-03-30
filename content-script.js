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


// add slider to control hslColor

const slider = document.create

//add random bongo cat to page

const bongoimageUrl = chrome.runtime.getURL('image/Bongo_Cat_Redraw.png');
const bongo = document.createElement('img');
bongo.setAttribute('src', bongoimageUrl)
// sets bongo in a random position
bongo.style.position = 'absolute';
bongo.style.left = Math.floor(Math.random() * (window.innerWidth - bongo.width)) + 'px';
bongo.style.top = Math.floor(Math.random() * (window.innerHeight - bongo.height)) + 'px';

//append bongo to body
body.appendChild(bongo);


// I need to figure out how to access and change cursor in content-script file
// figured it out. put in css file with url routed to chrome extension link of corgi cursor

// what to do next: implement counter to add additional cats
// get slider to change the intensity of dark


