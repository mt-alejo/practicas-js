const h1 = document.querySelector("h1");
const inputUn= document.querySelector("#sum1");
const inputDo = document.querySelector("#sum2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#resultadito");

btn.addEventListener("click", btnClick);

function btnClick() {
    const sumaTotal = parseInt(inputDo.value) + parseInt(inputUn.value);
    pResult.innerHTML= sumaTotal;
}



