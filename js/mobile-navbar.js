 
function abrirDropDown(){ 
    const lista = document.getElementById('lista-mobile');      
    if (lista.style.display == 'initial') {
        lista.style.display = 'none';   
    }
    else{
        lista.style.display = 'initial';
    }
}
class MobileNavbar{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }
    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}
const mobileNavbar = new MobileNavbar(
    ".solo-burguer",
    ".menu-vertical-mobile",
    ".lista-principal.mobile li"
);
mobileNavbar.init();