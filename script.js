const saveBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulEL = document.querySelector("#ul-el");
let myLeads = [];

let getLeads = (input) => {
    let string =  input.value;
    myLeads.push(string);
}

let saveLead = () => {
    getLeads(inputEl);
    for (let i in myLeads) {
        ulEL.innerHTML += "<li>" + myLeads[i] + "</li>"
    }
}

saveBtn.addEventListener("click", saveLead);


