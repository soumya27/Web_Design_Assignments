/**
 * @param {Event} event : the eventhandle that called the method
 *
 * @desc method to applies the selected style to the selected Button
 */
export let event = function(event){
    let command = event.currentTarget.name;
    let selection, range, node, text;
    let parentNodeCL, focusNodeCL;

    selection = window.getSelection();
    if (selection && selection.anchorNode!== null) {
        parentNodeCL = selection.anchorNode.parentNode.classList;
        focusNodeCL=  selection.focusNode.parentNode.classList;
        range = selection.getRangeAt(0);
        text =selection.toString();
        let extractContents =range.extractContents();
        console.log("Extracted Content  : "+ extractContents.childNodes);
        if((focusNodeCL.value).includes(command) && (parentNodeCL.value).includes(command)){
            let childNode = extractContents.childNodes;
            console.log("Child Node when class is same : "+ childNode);
            childNode.forEach(node => {
                if (node.data !== "") {
                    if (typeof node.classList === "undefined") {
                        node = selection.focusNode.parentNode;
                    }
                    node.classList.remove(command);
                    if (node.classList.value === "") {
                        let textNode = document.createTextNode(node.innerText);
                        node.replaceWith(textNode);
                    }
                }
            });
            range.insertNode(extractContents);
        }
        else {
            let notText = false;
            // loop through to understand if all text nodes
            extractContents.childNodes.forEach(node =>{
                console.log(node);
                if(node.nodeName === "SPAN" && node.classList.value === `${command}`){ // if style is exactly same  - then remove span make it text
                    let textNode = document.createTextNode(node.innerText);
                    node.replaceWith(textNode);
                }
                else if(node.nodeType !== 3 || selection.anchorNode.parentNode.nodeName === "SPAN")
                    notText = true;
            });
            if(notText){ // if all is not text, we need spans for all childnodes
                extractContents.childNodes.forEach(node => {
                    if (node.data !== "" || node.data !== " ") {
                        if(selection.anchorNode.parentNode.nodeName === "SPAN")
                        { // if the node is span
                            selection.anchorNode.parentNode.classList.add(`${command}`);
                        }
                        else if(typeof node.classList !== "undefined" && node.classList.value !== ""){
                            node.classList.add(`${command}`);
                        }
                        else {
                            let wrapper = document.createElement('span');
                            wrapper.setAttribute("class", `${command}`);
                            wrapper.innerText = node.data;
                            node.replaceWith(wrapper);
                        }
                    }
                    else{
                        node.remove();
                    }
                });
                range.insertNode(extractContents);
            }
            else { // if all is text - then wrap it under one span and apply style
                let wrapper = document.createElement('span');
                wrapper.setAttribute("class", `${command}`);
                wrapper.innerText = text;
                extractContents.childNodes.forEach(node =>{
                    node = wrapper;
                    range.insertNode(node);
                });
            }

        }
    }

    let deleteRogue = function () {
        let spanElements = document.getElementsByTagName("span");
        for(let i=0 ; i <spanElements.length; i++){
            if(spanElements[i].innerText ==="")
                spanElements[i].remove();
        }
    };
    deleteRogue();
};