import './../scss/main.scss';
import {createTable} from "./createTable";
let rxjs = require('rxjs');

//creating a form to take user input
let form  = document.createElement('form');
form.setAttribute("method", "POST");

// creating a fieldset within form
let fieldSet = document.createElement('fieldset');
form.appendChild(fieldSet);

// creating the label for the form
let formLabel = document.createElement('label');
formLabel.setAttribute('name', 'stock_input');
formLabel.innerText = "Enter Stocks (if more than one, separate using comma):     ";

fieldSet.appendChild(formLabel);

// creating the inputfield for the form
let inputField = document.createElement('input');
inputField.setAttribute('type','text');
inputField.setAttribute('name','stock_input');
inputField.setAttribute('id','stock_input');
inputField.setAttribute('class','stock_input');
inputField.setAttribute('placeholder', 'TASE , BIST  ');
inputField.required = true;

// creating button for the form
let okButton = document.createElement('button');
okButton.setAttribute('name','okButton');
okButton.setAttribute('class', 'okButton');
okButton.setAttribute('type','button');
okButton.innerText = "GO";

fieldSet.appendChild(inputField);
fieldSet.appendChild(okButton);

// Appending form to the body
let body = document.getElementsByTagName('body').item(0);
body.appendChild(form);

let table = createTable(body);

// Using RXJS - creating a event listener for the button
const event$ = rxjs.fromEvent(okButton, 'click');
let subscriber = event$.subscribe(function () {
    // fetching values from the input field
    let value = document.getElementsByName('stock_input').item(1).value;
    if(typeof value != "undefined" || value!= null){
        // spilt text - make separate request for each input stock name
        let list_values = value.split(",");
        let url = new URL('https://api.worldtradingdata.com/api/v1/stock?api_token=w22w245XEXBh8eEsqeU9T47Czs15hbgNuxSftgDVU7naFyx1Rg4rNYZtMNjP');
        list_values.forEach(oneValue =>{
                //if symbol already present in URL searchParam then set else append
                if(url.searchParams.get("symbol") == null)
                    url.searchParams.append("symbol",oneValue);
                else
                    url.searchParams.set("symbol",oneValue);
                fetch(url).then(
                    function(response) {
                        if (response.status !== 200) {
                            console.log('Looks like there was a problem. Status Code: ' + response.status);
                            return;
                        }
                        let tr = document.createElement('tr');
                        response.json().then(function(data) {
                            // Examine the Message in the response - if stock not found
                            if(typeof data.Message != "undefined"){
                                if(data.Message.includes("Error")) {
                                    alert("No such stock : "+oneValue);
                                    return;
                                }
                            }
                            // set visiblity of header
                            let header = document.getElementsByClassName('hidden').item(0);
                            if(header!=null)
                                header.setAttribute("class", "visible");
                                // create row for stock
                                console.log(data);
                                for (const [key, value] of Object.entries(data.data[0])) {
                                    var td = document.createElement('td');
                                    var text = document.createTextNode(value);
                                    td.appendChild(text);
                                    console.log(key, value);
                                    tr.appendChild(td);
                                }
                                table.appendChild(tr);
                        });
                    }
                ).catch(function(err) {
                    console.log('Fetch Error : ', err);
                });
        });
    }
});
