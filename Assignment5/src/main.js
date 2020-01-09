import './../scss/main.scss';
import {createDiv} from "./createDivElements.js";
import {createButton} from "./createButtonElements.js";
import {event} from "./applyStyle";
import {textSelection} from "./textSelection";

/** @type {Element} body */
let body = document.getElementsByTagName('body').item(0);

/** @type {Element} toolbar */
let toolbar = createDiv("toolbar",body);
/** @type {Element} mainFrame */
let mainFrame = createDiv("textEditor",body);
/** @type {Element} boldButton */
let boldButton = createButton('bold',"fa-bold fa-2x",toolbar);
/** @type {Element} italicButton */
let italicButton = createButton('italic',"fa-italic fa-2x",toolbar);
/** @type {Element} underlineButton */
let underlineButton = createButton('underline', 'fa-underline fa-2x', toolbar);
/** @type {Element} leftAlign */
let leftAlign = createButton('leftalign','fa-align-left fa-2x',toolbar);
/** @type {Element} centerAlign */
let centerAlign = createButton('centeralign','fa-align-justify fa-2x',toolbar);
/** @type {Element} rightAlign */
let rightAlign = createButton('rightalign','fa-align-right fa-2x',toolbar);

mainFrame.setAttribute('contenteditable', true);
toolbar.setAttribute('contenteditable', false);

/** @type {Element} buttons */
let buttons = document.querySelectorAll('[name]');
buttons.forEach(button =>{
    button.addEventListener('click',event);
});

document.addEventListener("click",textSelection);