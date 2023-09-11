var Header_main = document.getElementById("header_content");
var Tool_search = document.querySelector('.containter_tool-search');
var Gather_search = document.getElementById('containter_gather-search');
let scrolled = false;
let Y_Heigh = 0;
// window effect
window.addEventListener("load", (event) => {
    if(this.innerWidth < 2400){
        btn_menu.setAttribute('class', "btn_menu hidden");
        toggle_menu.setAttribute('class', " menu-toggole");
        if(scrolled == true){
            Header_main.classList.add('scrolled');
            toggle_menu.classList.add('scrolled');
            btn_menu.classList.remove('hidden');
            Tool_search.classList.remove('hidden');
            Gather_search.classList.add('hidden');
        }
    }
    if(this.innerWidth < 991){
        btn_menu.setAttribute('class', "btn_menu");
        toggle_menu.setAttribute('class', "menu-toggole side-menu hidden");
        Side_nav_ul.setAttribute('class', "unav_ul hidden");
    }
    if(this.innerWidth < 760){
        btn_menu.setAttribute('class', "btn_menu");
        toggle_menu.setAttribute('class', "menu-toggole side-menu hidden");
        Side_nav_ul.setAttribute('class', "unav_ul hidden");
    }
    if(this.scrollY > layout_container.clientHeight){
        scrolled = true;
    }
});
window.addEventListener('resize', (event) =>{
    if(this.innerWidth < 1600){
        btn_menu.setAttribute('class', "btn_menu hidden");
        toggle_menu.setAttribute('class', " menu-toggole");
        All_Body_contain.classList.remove('captured');
        Side_nav_ul.style.height = "";
        Header_main.style.top = "";
        Side_nav_ul.classList.remove('hidden');
        containterUnav.classList.remove('captured');
    }
    if(this.innerWidth < 992){
        btn_menu.setAttribute('class', "btn_menu");
        toggle_menu.setAttribute('class', "menu-toggole side-menu");
        containterUnav.classList.add('captured');
    }
    if(this.innerWidth < 760){
        btn_menu.setAttribute('class', "btn_menu");
        toggle_menu.setAttribute('class', "menu-toggole side-menu");
    }
});
window.addEventListener('scroll', (event) =>{
    if(this.innerWidth > 992)
    {
        if(scrolled == true){
            Header_main.classList.add('scrolled');
            toggle_menu.classList.add('scrolled');
            btn_menu.classList.remove('hidden');
            Tool_search.classList.remove('hidden');
            Gather_search.classList.add('hidden');
        }
        if(this.scrollY > layout_container.clientHeight && scrolled == false){
            Header_main.classList.add('scrolled');
            toggle_menu.classList.add('scrolled');
            btn_menu.classList.remove('hidden');
            Tool_search.classList.remove('hidden');
            Gather_search.classList.add('hidden');
            scrolled = true;
        }
        if(this.scrollY < layout_container.clientHeight && scrolled == true){
            Header_main.classList.remove('scrolled');
            toggle_menu.classList.remove('scrolled');
            btn_menu.classList.add('hidden');
            Tool_search.classList.add('hidden');
            Gather_search.classList.remove('hidden');
            scrolled = false;
        }
    }
    if(this.innerWidth <= 992){
        if(this.scrollY > layout_container.clientHeight && scrolled == false){
            Header_main.classList.add('scrolled');
            Header_main.style.top = "-100px";
            scrolled = true;
        }
        if(this.scrollY < layout_container.clientHeight && scrolled == true){
            Header_main.classList.remove('scrolled');
            Header_main.style.top = "";
            scrolled = false;
        }
        if(this.scrollY < Y_Heigh){
            Header_main.style.top = "";
        }else{
            Header_main.style.top = "-100px";
        }
    }
    if(Y_Heigh == 0 && Sroll_Remember != 0){
        Header_main.style.top = "";
        Y_Heigh = Sroll_Remember; 
    }else{
        Y_Heigh = this.scrollY;
    }
});
// Array right tool
var Tool_Array = document.querySelectorAll('.containter_tool > div');
// Array middle
var Gather_Array = document.querySelectorAll('.containter_gather > div');
// molbie stuff
var Molbie_Search = document.querySelector('.innner_molbie');
var Molbie_Closed = document.querySelector('.innner_molbie-close');
var Tool_holder = null;
// add click event
for (let i = 0; i < Tool_Array.length; i++) {
    const Tool = Tool_Array[i];
    Tool_Array[i].addEventListener('click', (e) =>{
        Tool_closed();
        let Tool_class = Tool.getAttribute('class');
        if(Tool_class.includes('cart')) {
            return;
        }
        if(Tool_class.includes('search')) {
            if(toggle_menu.getAttribute("class").includes("side-menu")){
                Search_Btn();
            }else{
                Gather_search.classList.remove('hidden');
                Tool_search.classList.add('hidden');
            }
            return;
        }
        if(Tool_holder == e.currentTarget){
            for (const b of Tool_holder.children) {
                if(b.getAttribute('class').includes('Popup')){
                    b.classList.add('hidden');
                }
            }
            Tool_holder = null;
            return;
        }
        if(Tool_holder == null){
            e.currentTarget.classList.add('focus');
            Tool_holder = e.currentTarget;
            for (const b of e.currentTarget.children) {
                if(b.getAttribute('class').includes('Popup')){
                    b.classList.remove('hidden');
                }
            }
        }else{
            for (const b of Tool_holder.children) {
                if(b.getAttribute('class').includes('Popup')){
                    b.classList.add('hidden');
                }
            }
            Tool_holder.classList.remove('focus');
            e.currentTarget.classList.add('focus');
            for (const b of e.currentTarget.children) {
                if(b.getAttribute('class').includes('Popup')){
                    b.classList.remove('hidden');
                }
            }
            Tool_holder = e.currentTarget;
        }
    });
}
Molbie_Closed.addEventListener('click', (e) =>{
    Search_Btn();
});
function Tool_closed(){
    for (let a = 0; a < Tool_Array.length; a++) {
        Tool_Array[a].classList.remove('focus');
    }
}
function Search_Btn(){
    Molbie_Search.getAttribute('class').includes('focus') ?
    Molbie_Search.classList.remove('focus') :
    Molbie_Search.classList.add('focus')
}
var layout_container = document.querySelector(".head_containter-layout");
var toggle_menu = document.querySelector(".menu-toggole");
var containterUnav = document.querySelector(".containter_unav");
var btn_menu = document.querySelector(".btn_menu");
var Side_nav_ul = document.querySelector('.unav_ul');
var Sroll_Remember = 0;
var All_Body_contain = document.getElementById("body_content");
// menu btn
btn_menu.addEventListener('click', (event) =>{
    toggle_menu.getAttribute("class").includes("side-menu")?
    Menu_clicked_Hor() : Menu_clicked_Ver();
});
function Menu_clicked_Hor(){
    if(toggle_menu.getAttribute('class').includes('captured')){
        Side_nav_ul.classList.add('hidden');
        toggle_menu.classList.remove('captured');
        containterUnav.classList.add('captured');
        All_Body_contain.classList.remove('captured');
        Side_nav_ul.style.height = '0px';
        window.scrollBy(0,Sroll_Remember);
    }else{
        Sroll_Remember = window.scrollY;
        Side_nav_ul.classList.remove('hidden');
        toggle_menu.classList.add('captured');
        containterUnav.classList.remove('captured');
        All_Body_contain.classList.add('captured');
        Side_nav_ul.style.height = document.body.clientHeight - layout_container.clientHeight;
    }
}
function Menu_clicked_Ver(){
    if(toggle_menu.getAttribute('class').includes('focus')){
        toggle_menu.classList.remove('focus');
        toggle_menu.classList.add('scrolled');
    }else{
        toggle_menu.classList.remove('scrolled');
        toggle_menu.classList.add('focus');
    }
}
// Items Btn
var Items_Array = document.querySelectorAll('.unav-item');
for(let a = 0; a < Items_Array.length; a++){
    if(Items_Array[a].querySelector('.menu_content-button')){
        Items_Array[a].querySelector('.menu_content-button').addEventListener('click', (e) =>{
            Items_clicked(Items_Array[a]);
        });
    }
}
var Items_Content_Btn_Array = document.querySelectorAll('.menu_content-ul .menu_content-button');
var Items_Content_Array = document.querySelectorAll('.menu_content-ul .hnav_list-dropdown');
for(let a = 0; a < Items_Content_Btn_Array.length; a++){
    Items_Content_Btn_Array[a].addEventListener('click', (e) =>{
        if(Items_Content_Array[a].getAttribute('class').includes('hidden')){
            Items_Content_Btn_Array[a].querySelector('.DownArrow').setAttribute('class', 'UpArrow');
            Items_Content_Array[a].classList.remove('hidden');
        }else{
            Items_Content_Btn_Array[a].querySelector('.UpArrow').setAttribute('class','DownArrow');
            Items_Content_Array[a].classList.add('hidden');
        }
    });
}
function Items_clicked(Item_Btn){
    if(Item_Btn.querySelector('.menu_content-dropdown').getAttribute('class').includes('hidden')){
        Item_Btn.querySelector('.menu_content-button .DownArrow').setAttribute('class', 'UpArrow');
        Item_Btn.querySelector('.menu_content-dropdown').classList.remove('hidden');
    }else{
        Item_Btn.querySelector('.menu_content-button .UpArrow').setAttribute('class','DownArrow');
        Item_Btn.querySelector('.menu_content-dropdown').classList.add('hidden');
    }
}