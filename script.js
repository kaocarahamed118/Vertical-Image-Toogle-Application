const items = document.querySelectorAll('.item');
function toogleopen(){
    this.classList.toggle('open');
    
}
function toogleactive(e){
    if(e.propertyName.includes('flex')){
        this.classList.toggle("open-active")
    }
}
items.forEach((item) => {
    item.addEventListener('click', toogleopen)
});
items.forEach((item) => {
    item.addEventListener('transitionend', toogleactive)
});

