let menubtn = document.getElementById('MenuBtn')
MenuBtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('movile-nav-active');
    this.classList.toggle('fa-xmark')
})
let typed = new Typed('#auto-input',{
    strings: ['Front-End Developer!', 'Web Designer!', 'Trader!'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 100,
    loop: true,
})
