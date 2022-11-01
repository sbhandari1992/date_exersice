

let dateInputObj = document.getElementById('date');
let btnClick = document.getElementById('btn');

btnClick.addEventListener("click", getDate );

function getDate() {
    let output = document.querySelector('output');
    let dateInputObjStr = dateInputObj.value;
    console.log(typeof dateInputObjStr);
    output.innerText = dateInputObjStr;


}