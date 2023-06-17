var info_Array = document.querySelectorAll(".info_list-container");
for (let a = 0; a < info_Array.length; a++) {
    const ListBtn = info_Array[a];
    if(!(ListBtn.querySelector('.info_list-toggole')))
    {
        break;
    }
    ListBtn.querySelector('.info_list-toggole').addEventListener('click', (e) =>{
        if(ListBtn.querySelector('.info_list-body').getAttribute('class').includes('Pressed')){
            ListBtn.querySelector('.info_list-body').classList.remove('Pressed');
            // console.log(e.target);
            e.target.querySelector('span').setAttribute('class', 'DownArrow');
        }else{
            ListBtn.querySelector('.info_list-body').classList.add('Pressed');
            e.target.querySelector('span').setAttribute('class', 'UpArrow');
        }
    });
};