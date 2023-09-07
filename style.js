const numeros = document.getElementsByClassName('numeros')[0]
const operadores = document.getElementsByClassName('operadores')[0]

const listaNumeros = [9,8,7,6,5,4,3,2,1,".",0,"C"]
const listaOperadores = ["+","-","x",":","R"]


function generateButtons(btnList,space){
    for(let n=0; n<btnList.length; n++){
        const btn = document.createElement('button')
        btn.innerText = btnList[n]
        space.append(btn)
    }
}


(()=>{
    generateButtons(listaNumeros,numeros)
    generateButtons(listaOperadores, operadores)
    
    const calculadora = document.createElement("script")
    calculadora.type = "text/javascript"
    calculadora.src = "calculadora.js"
    document.body.appendChild(calculadora)
}) ()