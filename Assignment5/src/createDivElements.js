/**
 * @param {Text} value : value of button
 * @param {Node} parent: where to add the button
 *
 * @return {Element} div element
 * @desc method to create div and set class attributes
 */
export let createDiv = (value, parent)=>{
    let div = document.createElement('div');
    div.setAttribute('class',`${value}`);
    parent.appendChild(div);
    return div;
};
