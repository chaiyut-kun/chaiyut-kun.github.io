const cover_btn: HTMLButtonElement = document.querySelector("#cover-btn-sign-up-in")!;
const sign_up_in_cover: HTMLDivElement = document.querySelector(".cover")!;
const sign_in_page : HTMLDivElement = document.querySelector(".sign-in")!;
const sign_up_page : HTMLDivElement = document.querySelector(".sign-up")!;

// sign_up_in_cover.classList.add("toggle-cover-left");

let page_boolean : boolean = false;

cover_btn.addEventListener("click", () => {
    
    page_boolean = !page_boolean;
    
    // first time page_boolean always = true
    // sign-in page
    sign_in_page.classList.toggle("acitve-sign-in" , !page_boolean);
    sign_in_page.classList.toggle("inacitve-sign-in" , page_boolean);
    // sign-up page
    sign_up_page.classList.toggle("active-sign-up" , page_boolean);
    sign_up_page.classList.toggle("inactive-sign-up" , !page_boolean);
    // cover
    sign_up_in_cover.classList.toggle("toggle-cover-right" , !page_boolean);
    sign_up_in_cover.classList.toggle("toggle-cover-left" , page_boolean);
    
    cover_btn.value = page_boolean ? "Sign in" : "Sign up";

    console.log("page_boolean: ", page_boolean);

    
})



