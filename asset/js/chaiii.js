let answer = "picoCTF{1234}"


function checkBool(){
    let a = prompt("Enter your flag")
    if (a == answer){
        alert("Your flag is True")
    }
    else{
        alert("Your flag is False")
        return checkBool();
    }
}

checkBool();

