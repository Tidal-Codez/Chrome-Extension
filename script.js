const saveBtn = document.querySelector("#input-btn");
const ulEL = document.querySelector("#ul-el");
let inputEl = document.querySelector("#input-el");
let myLeads = [];


let getLeads = (input) => {
    myLeads.push(input.value);
}

let saveLead = () => {
    getLeads(inputEl);
    ulEL.innerHTML += `<li> 
        <a target = "_blank" href = "${inputEl.value}">
            ${inputEl.value} 
        </a> 
    </li>`;
    console.log(ulEL)
    inputEl.value = "";
}


saveBtn.addEventListener("click", saveLead);


