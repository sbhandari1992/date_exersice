

let dateInputObj = document.getElementById('date');
let btnClick = document.getElementById('btn');
let output = document.querySelector('output');

btnClick.addEventListener("click", getDate );

function getDate() {
    let dateInputObjStr = dateInputObj.value;
    output.innerText = dateInputObjStr;


}