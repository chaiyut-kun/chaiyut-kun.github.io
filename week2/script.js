const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const result = document.getElementById('result')

let numStr = ""
let opts = ['+','-','*','/']
function calAdd(opt) {
    result.value = eval(opt)
}

function passNum(n) {
    if (n == "="){
        calAdd(numStr)
        return
        
    }
    if (n == "C") {
        numStr = ""
        result.value = ""
    }
    else if (n == "=>") {
        numStr = numStr.substring(0, numStr.length-1)
        // input1.value = numStr
    }
    else {
        if (opts.includes(numStr.at(numStr.length) , numStr.length)){
            console.log("eiei cannot to that")
        }
        lastIndex = numStr.length
        console.log()
        numStr+= n
    }
    input1.value = numStr
}
