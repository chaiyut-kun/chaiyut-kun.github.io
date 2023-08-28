let main = document.querySelector('body')
// let content = document.querySelector('.content')
let Enter = document.querySelector('#Enter')
let Clear = document.querySelector('#Clear')
let input = document.querySelector("[type='number']");
Enter.addEventListener('click',MultiplyProgram)
Clear.addEventListener('click',DeleteTable)
var count_clear = 0








//function 
function MultiplyProgram(){
    
    if (count_clear == 1){
        DeleteTable()
    }
    create_Table()
    count_clear+=1
    console.log(count_clear)
    
}



function DeleteTable(){
    
    textoShow = main.querySelectorAll('p')
    console.log(textoShow)
    textoShow.forEach(element =>  {
        main.removeChild(element)
    });
    count_clear-=1

}

function create_Table(){
    
    Value = Number(input.value)
    for (let j = 1;j<13;j++){
            textoShow = document.createElement('p')
            textoShow.innerText = `${Value} x ${j} = ${Value*j}`
            main.appendChild(textoShow)
    }
}

    

    
// } 
