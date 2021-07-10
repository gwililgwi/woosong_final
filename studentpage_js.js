const btAll = document.getElementById('category_all');
const btCom = document.getElementById('category_communication');
const btMot = document.getElementById('category_motion');

const contAll = document.getElementById('cont_photo_all');
const contCom = document.getElementById('cont_photo_communi');
const contMot = document.getElementById('cont_photo_motion');

const searchB = document.getElementById('searchbar_input');

const majorB = document.querySelectorAll(".major_button");




function categoryclickA(){
    contAll.style.display = "flex";
    contCom.style.display = "none";
    contMot.style.display = "none";

    majorB[0].style.color ="#cccccc";
    majorB[1].style.color ="#707070";
    majorB[2].style.color ="#707070";
}

function categoryclickC(){
    contAll.style.display = "none";
    contCom.style.display = "flex";
    contMot.style.display = "none";

    majorB[0].style.color ="#707070";
    majorB[1].style.color ="#cccccc";
    majorB[2].style.color ="#707070";
}

function categoryclickM(){
    contAll.style.display = "none";
    contCom.style.display = "none";
    contMot.style.display = "flex";

    majorB[0].style.color ="#707070";
    majorB[1].style.color ="#707070";
    majorB[2].style.color ="#cccccc";
}



// 검색어

function filter(){
    var value = searchB.value;
    var item = document.getElementsByClassName("photo_name");

    for(i=0; i< item.length; i++){
        var name = item[i].getElementsByClassName("photoText");
        if(name[0].innerHTML.indexOf(value) > -1){
            item[i].style.display = 'flex';
        }else{
            item[i].style.display = 'none';
        }
    }
}





// mobile SEARCH BUTTON
const searchbutton = document.querySelector("#search_button")
const majorlist = document.querySelector(".major_divide")

searchbutton.addEventListener("click",function(){
    if(searchbutton.value == "1"){
        searchbutton.value = "2";
        searchB.style.display = "block";
        majorlist.style.display = "none";
    }else{
        searchbutton.value = "1";
        searchB.style.display = "none";
        majorlist.style.display = "flex";
    }
})














// mobile TOP MENU

const dropmenu = document.querySelector(".topmenu_mobile_list_all");
const button = document.querySelector("#menu_button");


button.addEventListener("click",function(){
    if(button.value == "1"){
        button.value = "2";
        dropmenu.style.visibility = "visible";
        dropmenu.style.opacity = "1";
        document.querySelector(".cont_categoryANDsearch").style.marginTop = "5.5rem"
    } else{
        button.value = "1";
        dropmenu.style.visibility = "hidden";
        dropmenu.style.opacity = "0";
        document.querySelector(".cont_categoryANDsearch").style.marginTop = "3.5rem"
    }
})