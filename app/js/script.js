
const hambuggerBtn = document.querySelector('.hambuggerBtn > img')
const fadeElems = document.querySelectorAll('.has-fade')
const overlay = document.querySelector('.overlay')
const ul = document.querySelector('.ul')



hambuggerBtn.addEventListener('click', () => {

    if(overlay.classList.contains('fade-in') || ul.classList.contains('slide-in')){
       
        hambuggerBtn.src = '/images/icon-hamburger.svg'
        overlay.classList.remove('fade-in')
        overlay.classList.add('fade-out')
        ul.classList.remove('slide-in')
        ul.classList.add('slide-out')
    }

    else{
        hambuggerBtn.src = '/images/icon-close.svg'
        overlay.classList.remove('fade-out')
        overlay.classList.add('fade-in')
        ul.classList.add('slide-in')
        ul.classList.remove('slide-out')
        


    }

   
})