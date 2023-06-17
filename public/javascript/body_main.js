// slick list roll
var slick_list_moveable = document.querySelector(".slick_list-nav");
var slick_LBtn = document.querySelector(".slick_list-crossroll_before");
var slick_RBtn = document.querySelector(".slick_list-crossroll_after");
var slick_list_Array = document.querySelectorAll(".slick_list-li");
var slick_width_li = document.querySelector('.slick_list-li:last-child').clientWidth;
var slick_jump = 0;
var slick_limited = slick_list_moveable.clientWidth - (slick_list_Array.length * slick_width_li) ;
// club list roll
var club_list_moveable = document.querySelector(".club_list-nav");
var club_LBtn = document.querySelector(".club_list-crossroll_before");
var club_RBtn = document.querySelector(".club_list-crossroll_after");
var club_list_Array = document.querySelectorAll(".club_list-li");
var club_width_li = document.querySelector('.club_list-li:last-child').clientWidth;
var club_jump = 0;
var club_limited = club_list_moveable.clientWidth - (club_list_Array.length * club_width_li) ;
// window loaded
window.addEventListener('load' , (e) => {
    if(this.innerWidth < 600){
        UnTouch = true;
    }else{
        UnTouch = false;
    }
});
var UnTouch = false;
// window resize event
window.addEventListener('resize' , (e) => {
    slick_width_li = document.querySelector('.slick_list-li:last-child').clientWidth;
    slick_jump = 0;
    slick_list_moveable.style.transform = `translateX(${slick_jump}px)`;
    slick_limited = slick_list_moveable.clientWidth - (slick_list_Array.length * slick_width_li) ;
    club_width_li = document.querySelector('.club_list-li:last-child').clientWidth;
    club_jump = 0;
    club_list_moveable.style.transform = `translateX(${club_jump}px)`;
    club_limited = club_list_moveable.clientWidth - (club_list_Array.length * club_width_li) ;
    if(this.innerWidth < 600){
        ClosePopup();
        UnTouch = true;
    }else{
        UnTouch = false;
    }
});
// Button click
slick_RBtn.addEventListener("click", (e) =>{
    // console.log(`jump ${slick_jump}`)
    if(slick_jump <= slick_limited){
        slick_jump = slick_limited;
        slick_list_moveable.style.transform = `translateX(${slick_jump}px)`;
    }else{
        slick_jump -= slick_width_li;
        slick_list_moveable.style.transform = `translateX(${slick_jump}px)`;
    }
});
slick_LBtn.addEventListener("click", (e) =>{
    if(slick_jump >= 0){
        slick_jump = 0;
        slick_list_moveable.style.transform = `translateX(${slick_jump}px)`;
    }else{
        slick_jump += slick_width_li;
        slick_list_moveable.style.transform = `translateX(${slick_jump}px)`;
    }
});
club_RBtn.addEventListener("click", (e) =>{
    if(club_jump <= club_limited){
        club_jump = club_limited;
        club_list_moveable.style.transform = `translateX(${club_jump}px)`;
    }else{
        club_jump -= club_width_li;
        club_list_moveable.style.transform = `translateX(${club_jump}px)`;
    }
});
club_LBtn.addEventListener("click", (e) =>{
    if(club_jump >= 0){
        club_jump = 0;
        club_list_moveable.style.transform = `translateX(${club_jump}px)`;
    }else{
        club_jump += club_width_li;
        club_list_moveable.style.transform = `translateX(${club_jump}px)`;
    }
});
// Click Popup
var Background = document.querySelector('.club_list-Popup');
var Popup_close = document.querySelector('.club_Popup-close');
var Popup_Btnl = document.querySelector('.club_Popup-crossroll_before');
var Popup_Btnr = document.querySelector('.club_Popup-crossroll_after');
var Popup_list_Array = document.querySelectorAll('.club_Popup-li');
var Popup_scroll_show = document.querySelectorAll('.club_Popup-body');
// show Popup
club_list_Array.forEach( (club_click,i) => {
    club_click.addEventListener("click", (e) =>{
        OpenPopup(i);
    });
});
// closed Popup
Background.addEventListener('click' , (e) =>{
    // if(!(e.composedPath()[0].getAttribute("class"))) return;
    // if(e.composedPath()[0].getAttribute("class").includes("club_list-Popup")){
    //     ClosePopup();
    // }
    // or
    if(!e.target.getAttribute('class')) return;
    if(e.target.getAttribute("class").includes("club_list-Popup")){
        ClosePopup();
    }
});
Popup_close.addEventListener('click' , (e) =>{
    ClosePopup();
});
// button click
Popup_Btnl.addEventListener('click' , (e) =>{
    PopupMove(-1)
});
Popup_Btnr.addEventListener('click' , (e) =>{
    PopupMove(1);
});
function PopupMove(club_n){
    for (let a = 0; a < Popup_list_Array.length; a++) {
        const Popunder = Popup_list_Array[a];
        if(Popunder.getAttribute('class').includes('Tagon') 
        && (club_n + a) >= 0 && (club_n + a) < Popup_list_Array.length){
            Popunder.classList.remove('Tagon');
            Popup_list_Array[club_n + a].classList.add('Tagon');
            console.log(`scroll height ->  ${Popup_scroll_show[club_n + a].scrollHeight}`);
            console.log(`client height -> ${Popup_scroll_show[club_n + a].clientHeight}`);
            // if(Popup_scroll_show[club_n + a].scrollHeight >  Popup_scroll_show[club_n + a].clientHeight){
            //     Popup_scroll_show[club_n + a].style.overflowY = "scroll";
            // }else{Popup_scroll_show[club_n + a].style.overflowY = "auto";}
            break;
        }
    }
}
function OpenPopup(club_n){
    Popup_list_Array.forEach((Popunder, num) => {
        if(club_n == num && UnTouch == false){
            Background.classList.add('Tagon');
            Popunder.classList.add('Tagon');
        }
    });
}
function ClosePopup(){
    Popup_list_Array.forEach((Popunder) => {
        Background.classList.remove('Tagon');
        Popunder.classList.remove('Tagon');
    });
}