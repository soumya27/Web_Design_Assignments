import './../scss/main.scss';

let body = document.getElementsByTagName('body').item(0);

let header = document.createElement('header');
let clearDiv = document.createElement('div');
clearDiv.setAttribute('class', 'clear');

let clearIcon = document.createElement('i');
clearIcon.setAttribute('class',"fa fa-refresh fa-3x");

clearDiv.appendChild(clearIcon);
header.appendChild(clearDiv);

let dateDiv = document.createElement('div');
dateDiv.setAttribute('class','date');
dateDiv.setAttribute('id','date');

header.appendChild(dateDiv);

let section = document.createElement('section');
section.setAttribute('class','content');

let addDiv = document.createElement("div");
addDiv.setAttribute('class','add-item');

let addIcon = document.createElement('i');
addIcon.setAttribute('class', "fa fa-plus-circle fa-2x");

let addInput = document.createElement('input');
addInput.setAttribute('type','text');
addInput.setAttribute('id','input');
addInput.setAttribute('placeholder','New a to-do item');

addDiv.appendChild(addIcon);
addDiv.appendChild(addInput);

let list = document.createElement('ul');
list.setAttribute('class',"list");
list.setAttribute('id',"list");

let listItem = document.createElement('li');
listItem.setAttribute('class','item');

let iconComplete = document.createElement('i');
iconComplete.setAttribute("class", "fa fa-circle-thin fa-2x complete")

let itemText = document.createElement('p');
itemText.setAttribute('class', "text");
itemText.innerText = "Drink Coffee";

let iconDelete = document.createElement('i');
iconDelete.setAttribute("class","fa fa-trash-o fa-2x delete");

listItem.appendChild(iconComplete);
listItem.appendChild(itemText);
listItem.appendChild(iconDelete);

list.appendChild(listItem);


section.appendChild(addDiv);
section.appendChild(list);

body.appendChild(header);
body.appendChild(section);