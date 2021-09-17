let num1 = document.querySelector("#firstBox")
let num2 = document.querySelector("#secondBox")

document.querySelector('#add').addEventListener('click',plus)
document.querySelector('#subtract').addEventListener('click',minus)
document.querySelector('#multiply').addEventListener('click',times)
document.querySelector('#divide').addEventListener('click',divide)
document.querySelector('#clear').addEventListener('click',clear)


function plus(){
    let sum = Number(num1.value) + Number(num2.value)
    document.querySelector('#output').innerText = sum
}


function minus(){
  let difference = Number(num1.value) - Number(num2.value)
  document.querySelector('#output').innerText = difference
}


function times(){
  let product = Number(num1.value) * Number(num2.value)
  document.querySelector("#output").innerText = product
}


function divide(){
    let quotient = Number(num1.value) / Number(num2.value)
    document.querySelector("#output").innerText = quotient
  }

function clear(){
  document.querySelector("#output").innerText = ""
  document.querySelector("#firstBox").value = ""
  document.querySelector("#secondBox").value = ""
}
