/**
 * @param {Text} value : value of button
 * @param {Text} icon : icon value
 * @param {Node} parent: where to add the button
 *
 * @return {Element} button element
 * @desc method to create button, set class and name attributes and include icon
 */
export let createButton = (value,icon,parent) => {
    let button = document.createElement('button');
    button.setAttribute('class', `${value}`);
    button.setAttribute('name', `${value}`);
    button.innerHTML = `<i class = "fa ${icon}"></i>`;
    parent.appendChild(button);
    return button;
};