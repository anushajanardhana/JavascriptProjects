const btnElement = document.querySelector('button');
const spanElement = document.querySelector('h1 > span');

btnElement.onclick = function () {
    const yourName = prompt('Here please enter your name: ');
    spanElement.textContent = yourName;
}
