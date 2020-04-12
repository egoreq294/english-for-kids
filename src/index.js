let burgerShow = false;
document.querySelector('.menu_button').addEventListener('click',()=>{
    console.log('privet eba')
    console.log(document.querySelector('.burger'));
    if(burgerShow===false){
        burgerShow = true;
        document.querySelector('.burger').classList.remove('display_none');
    }
    else{
        burgerShow = false;
        document.querySelector('.burger').classList.add('display_none');

    }
});