/**
 * @param {Event} event : the eventhandle that called the method
 *
 * @desc method is to highlight the buttons which are applicable to the selected text
 * */
export let textSelection = function (event) {
    let values = event.target.classList.values();
    let buttonList = ["bold","italic","underline","centeralign","rightalign","leftalign"];
    let selection = document.getSelection();
    if(selection.toString()!==""){
           for( let value of values){
                buttonList.forEach(button => {
                    if (value === button) {
                        let selectedButton = document.getElementsByName(button).item(0);
                        selectedButton.classList.add("active");
                    }
                });
           }
    }
    else {
        buttonList.forEach(button => {
            let selectedButton = document.getElementsByName(button).item(0);
            selectedButton.classList.remove("active");
        });
    }
}