let answer = "picoCTF{1234}"
let pass = 'admin'


function checkBool(){
    let a = prompt("Enter your flag \"The flag is ' picoCTF{1234} '\" ")
    let b = prompt("Enter your pass \"password is ' admin ' \"")
    if (a == answer && b == pass){
        alert("Your flag is True")
    }
    else{
        alert("Your flag is False")
        return checkBool();
    }
}


let body = document.querySelector('body')
let aboutME = document.getElementById('aboutME')
let descibe1 = document.getElementById('describe1')
let descibe2 = document.getElementById('describe2')


let theme = document.getElementById('theme')
theme.addEventListener('click', changeTheme)
let themeImg = theme.querySelector('img')
let nav = document.getElementById('navigation')


function changeTheme(){

    body.classList.toggle('Dark')
    checkTheme()
    
    
}


function checkTheme(){

    let check = body.classList.contains('Dark')
    if (check){
        
        themeImg.src = '/asset/img/day.png'
        nav.querySelectorAll('a').forEach((e) => e.style.color = '#E8E5F5')
        body.querySelectorAll('p').forEach((e) => e.style.color = '#E8E5F5')
        body.querySelectorAll('h1').forEach((e) => e.style.color = '#E8E5E5')
        body.querySelectorAll('h3').forEach((e) => e.style.color = '#E8E5E5')
        
        
    }
    else{
        nav.querySelectorAll('a').forEach((e) => e.style.color = '#2A2254')
        body.querySelectorAll('p').forEach((e) => e.style.color = '#2A2254')
        body.querySelectorAll('h1').forEach((e) => e.style.color = '#2A2254')
        body.querySelectorAll('h3').forEach((e) => e.style.color = '#2A2254')
        themeImg.src = '/asset/img/images-removebg-preview (1).png'
        // themeImg.style.backgroundColor = ''
        
    }
}