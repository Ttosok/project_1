var Header_main = document.getElementById("header_content");

window.addEventListener('scroll', (e) => {
    // console.log(window.outerWidth + " outterwidth");
    // console.log(window.pageXOffset + " pageXOffset");
    // console.log(window.pageYOffset + " pageYOffset");
    if(this.scrollY > 25){
        // head_menu.style.transform = "translateY(-40px)";

        // head_menu.setAttribute('class', "head_containter-sort menu-toggole captured");
        // Header_main.style.position = "fixed";
        // Header_main.querySelector('.containter_tool-search').setAttribute('class', "containter_tool-search");
        // Header_main.querySelector('.head_right-middle').setAttribute('class', "head_right-middle hidden");
        // Header_main.querySelector('.head_left .btn_menu').setAttribute('class', "btn_menu");

        // Header_main.querySelector('.containter_tool').style.justifyContent = "flex-end";
    }else{
        // head_menu.style.transform = "translateY(0px)";

        // head_menu.setAttribute('class', "head_containter-sort menu-toggole");
        // Header_main.style.position = "absolute";
        // Header_main.querySelector('.containter_tool-search').setAttribute('class', "containter_tool-search hidden");
        // Header_main.querySelector('.head_right-middle').setAttribute('class', "head_right-middle");
        // Header_main.querySelector('.head_left .btn_menu').setAttribute('class', "btn_menu hidden");

        // Header_main.querySelector('.containter_tool').style.justifyContent = "flex-start";
    }
});
var head_menu = document.querySelector(".menu-toggole");
function Menu_clicked_Hor(){
    console.log("checking for horizon");
}
function Menu_clicked_Ver(){
    console.log("checking for vertical");
}
var btn_menu = document.querySelector(".btn_menu");
btn_menu.addEventListener('click', (event) =>{ /*  && head_menu.getAttribute("class").includes("focus") */ 
    head_menu.getAttribute("class").includes("side-menu")?
    Menu_clicked_Hor() : Menu_clicked_Ver();

    // if(head_menu.getAttribute("class").includes("focus"))
    // {
    //     for (const kid of  Header_main.querySelector('.head_left .btn_menu-icon').children) {
    //         console.log(`${kid.className == "hidden" ? kid.className + "before  here" : kid.className + " before here"}`);
    //         kid.className == "hidden" ? kid.classList.remove("hidden") : kid.classList.add("hidden");
    //     }
    //     head_menu.setAttribute('class', "head_containter-sort menu-toggole captured");
    // }else{
    //     head_menu.setAttribute('class', "head_containter-sort menu-toggole captured focus");
    //     for (const kid of  Header_main.querySelector('.head_left .btn_menu-icon').children) {
    //         console.log(`${kid.className == "hidden" ? kid.className + " fater here" : kid.className + " after  here"}`);
    //         kid.className == "hidden" ? kid.classList.remove("hidden") : kid.classList.add("hidden");
    //     }
    // }
    head_menu.getAttribute("class").includes("focus") ?
    head_menu.setAttribute('class', " menu-toggole captured") : head_menu.setAttribute('class', "menu-toggole captured focus");
    for (const kid of  Header_main.querySelector('.head_left .btn_menu-icon').children) {
        console.log(`${kid.className == "hidden" ? kid.className + " no hidden here" : kid.className + " after hidden here"}`);
        kid.className == "hidden" ? kid.classList.remove("hidden") : kid.classList.add("hidden");
    }
});
var Array_unavLi = document.querySelectorAll(".unav-li");
var Array_unavItem = document.querySelectorAll(".unav-item")
var All_Body_contain = document.getElementById("body_content")
window.addEventListener("resize", (e) =>{
    // console.log(this.innerWidth + " innerwidth");
    if(this.innerWidth < 1600){
        All_Body_contain.style.top = "110px";
        btn_menu.setAttribute('class', "btn_menu hidden");
        head_menu.setAttribute('class', " menu-toggole");
        // for(const unavLi of Array_unavLi){
        //     unavLi.setAttribute('class', "unav-li");
        // }
        // for(const unavitem of Array_unavItem){
        //     unavitem.setAttribute('class', "unav-item hidden");
        // }
    }
    if(this.innerWidth < 992){
        All_Body_contain.style.top = "40px";
        btn_menu.setAttribute('class', "btn_menu");
        head_menu.setAttribute('class', "menu-toggole hidden");
        // for(const unavLi of Array_unavLi){
        //     unavLi.setAttribute('class', "unav-li hidden");
        // }
        // for(const unavitem of Array_unavItem){
        //     unavitem.setAttribute('class', "unav-item side-menu");
        // }
    }
    if(this.innerWidth < 320){
        All_Body_contain.style.top = "40px";
        btn_menu.setAttribute('class', "btn_menu");
        head_menu.setAttribute('class', "menu-toggole hidden");
        
    }
});
// window.addEventListener('click', (event) =>{
//     console.log(event.target);
//     console.log(event.target.parentNode);
//     // console.log("event.target.parentNode -2");
//     // console.log(event.target.parentNode.parentNode);
//     // console.log(event.currentTarget.parentNode);
//     if (event.target.parentNode.parentNode != Header_main.querySelector('.containter_tool-account .account-layout')){
//         // console.log(Header_main.querySelector('.accountPopup').getAttribute("class"));
//         if(Header_main.querySelector('.accountPopup').getAttribute("class").includes("hidden")) {return;}
//         Header_main.querySelector('.account-layout').setAttribute('class', "account-layout");
//         Header_main.querySelector('.accountPopup').setAttribute("class", "accountPopup hidden");
//     }
//     if (event.target.parentNode != Header_main.querySelector('.containter_tool-support .account-layout')){
//         if(Header_main.querySelector('.supportPopup').getAttribute("class").includes("hidden")) {return;}
//         Header_main.querySelector('.support-layout').setAttribute('class', "support-layout");
//         Header_main.querySelector('.supportPopup').setAttribute("class", "supportPopup hidden");
//         Header_main.querySelector('.supportPopup').setAttribute("class", "supportPopup hidden");
//     }
// });

var Search_box = document.querySelector(".search-inbox");
Search_box.querySelector(".search-input").addEventListener('input', (event) =>{
    // console.log("type => " + event.type);
    // console.log("value => " + event.currentTarget.value);
    //&& Search_box.querySelector('.restart').getAttribute("class").includes("hidden")
    event.currentTarget.value.length > 0 ? 
    Search_box.querySelector('.restart').classList.remove("hidden") : Search_box.querySelector('.restart').classList.add("hidden");
});
Search_box.querySelector('.restart').addEventListener("click", (event) =>{
    Search_box.querySelector('.restart').classList.add("hidden");
});
Header_main.addEventListener('click', (event) =>{
    // const Info = event.target.parentNode.getAttribute("class");
    // const bc = ["account", "support"]
    // console.log(Info);
    // console.log(typeof Info);
//     if(event.target.parentNode.hasAttribute("class") && event.target.parentNode.getAttribute("class").indexOf(bc[i]) >= 0)
    //     console.log("Muus");
    //     Header_main.querySelector('.accountPopup').setAttribute("class", "accountPopup hidden");
    //     Header_main.querySelector('.supportPopup').setAttribute("class", "supportPopup hidden");

    // if (event.target.parentNode.parentNode != Header_main.querySelector('.containter_tool-account .account-layout')) {
    //     // console.log(Header_main.querySelector('.accountPopup').getAttribute("class"));
    //     if(Header_main.querySelector('.accountPopup').getAttribute("class").includes("hidden")) {return;}
    //         Header_main.querySelector('.accountPopup').setAttribute("class", "accountPopup hidden");
    // }
});
// Header_main.querySelector('.accountPopup').getAttribute("class").includes("hidden") ?    //This is a one-line shorthand for an if-else statement. It's called the conditional operator.
//  Header_main.querySelector('.accountPopup').setAttribute('class', "accountPopup") :      //example a = b ? "a == b" : "a != b"
//  Header_main.querySelector('.accountPopup').setAttribute("class", "accountPopup hidden");

var head_support = document.querySelector(".containter_tool-support");
var head_account = document.querySelector(".containter_tool-account");
head_account.addEventListener('click', (event) =>{
    // console.log("Currtarget");
    // console.log(event.currentTarget);
    // console.log("target");
    // console.log(event.target);
    if(head_account.querySelector('.accountPopup').getAttribute("class").includes("hidden")){
        head_account.querySelector('.account-layout').setAttribute('class', "account-layout focus");
        head_account.querySelector('.accountPopup').setAttribute('class', "accountPopup");
    }
    else{ 
        head_account.querySelector('.account-layout').setAttribute('class', "account-layout");
        head_account.querySelector('.accountPopup').setAttribute("class", "accountPopup hidden");
    }
});

head_support.addEventListener('click', (event) =>{
    if(head_support.querySelector('.supportPopup').getAttribute("class").includes("hidden")){
        head_support.querySelector('.support-layout').setAttribute('class', "support-layout focus");
        head_support.querySelector('.supportPopup').setAttribute('class', "supportPopup");
    }
    else{ 
        head_support.querySelector('.support-layout').setAttribute('class', "support-layout");
        head_support.querySelector('.supportPopup').setAttribute("class", "supportPopup hidden");
    }
});
var head_searchScroll = document.getElementById("searchlink");
head_searchScroll.addEventListener('click', (event) =>{
    Header_main.querySelector('.head_right-middle').setAttribute('class', "head_right-middle");
    Header_main.querySelector('.containter_tool-search').setAttribute('class', "containter_tool-search hidden");
});

// const Father =  Header_main.querySelector('.head_left .btn_menu-icon');
// for (const child of Father.children) {
//     console.log(`${child.className == "hidden" ? "there is hidden here" : " no hidden here"}`);
// }


window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
});