let main = document.querySelector('main')
let Enter = document.querySelector('#Enter')
let Clear = document.querySelector('#Clear')
let input = document.querySelector("[type='number']");
Enter.addEventListener('click',MultiplyProgram)
Clear.addEventListener('click',DeleteTable)


function MultiplyProgram(){
    let Value = Number(input.value)
    
    for (i = 1; i<13;i++){
        
        let textoShow = document.createElement('p')
        textoShow.innerText = `${Value} x ${i} =  ${Value*i}`
        console.log(i)
        main.appendChild(textoShow)
    }
    
}

function DeleteTable(){
    
    for (i = 1;i<13;i++){
        
        let textoShow = document.querySelector('p')
        main.removeChild(textoShow)
        
    }
    
    
}
