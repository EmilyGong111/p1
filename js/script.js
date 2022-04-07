let checkBox=document.getElementById('nav-toggle');

window.onscroll = () =>{
    

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}