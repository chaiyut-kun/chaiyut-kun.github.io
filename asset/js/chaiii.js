// let answer = "picoCTF{1234}"


// function checkBool(){
//     let a = prompt("Enter your flag")
//     if (a == answer){
//         alert("Your flag is True")
//     }
//     else{
//         alert("Your flag is False")
//         return checkBool();
//     }
// }

// checkBool();


let aboutME = document.getElementById('aboutME')
let descibe1 = document.getElementById('describe1')
let descibe2 = document.getElementById('describe2')
function toAbout(){
    aboutME.classList.add('Headabout')
    descibe1.classList.remove('describe')
    descibe1.classList.add('describe2')
    descibe2.classList.remove('describe')
    descibe2.classList.add('describe2')
    
    
}

// function toggle(){
//     togglecolo.classList.toggle('addcolor');
//     check_toggle();
//     contains();
        
// }