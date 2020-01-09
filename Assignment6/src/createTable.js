import {retry} from "rxjs/operators";

export let createTable = (parent)=>{
    // using a list to create the header
    let header_list = ["Symbol", "Same" ,"Currency", "Price","Open Price","High","Low","52 week High" ,
        "52 Week Low" ,"Day Change","Change pct","Close","Market Cap","Volume","Volume Avg",
        "Shares","Stock Long" ,"Stock Short","Timezone" ,"Timezone name","GMT",
        "Last Trade","PE","EPS"];

    let table = document.createElement('table');
    // create header - set visible to none
    let header = document.createElement("tr");
    header_list.forEach(function (headerItem) {
        var th = document.createElement('th');
        var text = document.createTextNode(headerItem);
        th.appendChild(text);
        header.appendChild(th);
    });
    header.setAttribute("class", "hidden");

    table.appendChild(header);
    parent.appendChild(table);
    return table;
};
