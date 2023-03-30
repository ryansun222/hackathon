// add slider to popup.html
const div = document.createElement('div');
div.classList.add('slideContainer');
const input = document.createElement('input');
input.setAttribute('type', 'range');
input.setAttribute('min', '0');
input.setAttribute('max', '100');
input.setAttribute('value', '50');
input.setAttribute('id', 'myRange')
document.querySelector('.controls').appendChild(div);
div.appendChild(input);
console.log('hello');


// add slider functionality to chrome tabs

const slider = document.getElementById("myRange");
slider.addEventListener("input", () => {
  const brightness = slider.value / 100;
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { brightness }, function (response) {
      console.log(response);
    });
  });
});