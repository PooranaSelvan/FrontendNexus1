// Nav Bar Event ================================================

function navEvent(){
    const menu = document.getElementById('nav');
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    }
    else{
        menu.classList.add('hidden');
    }
}