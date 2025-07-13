const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const result = document.getElementById('result')
const error = document.getElementById('error')
let numStr = ""
let opts = ['+','-','*','/']
function calAdd(opt) {
    if (numStr == ""){
            valueError("Please Enter expression")
    }
    else {
        result.value = eval(opt)
    }
}

function valueError(m="enter number instead of operators!"){
    error.style.display = "block"
    error.style.backgroundColor = "#c34a4aff"
    error.style.color = "#ffffff"
    error.value = m
    error.style.whiteSpace = "pre"
    error.style.overflowWrap = "break-word"
}

function defaultValue() {
    error.style.display = "none"
}

function passNum(n) {
    if (n ==  "="){
        calAdd(numStr)
        return
    }
    
    if (n == "C") {
        numStr = ""
        result.value = ""
        defaultValue()
    }
    else if (n == "=>") {
        numStr = numStr.substring(0, numStr.length-1)
        // input1.value = numStr
    }
    else {
        if (opts.includes(numStr.at(numStr.length - 1)) && opts.includes(n,numStr.length-1)){
            console.log("eiei cannot to that");
            valueError();
        }
        else {
            defaultValue();
            numStr += n
        }
    }
    input1.value = numStr
}

defaultValue();