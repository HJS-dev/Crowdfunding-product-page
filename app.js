let btn = document.getElementById('menu-btn')
// let bar = document.querySelector('.bar')
let menu = document.getElementById('menu')
let overLay = document.querySelector('.main-section')
let msg = document.querySelector('.message')
let msgBtn = document.querySelector('.msg-btn')



btn.addEventListener('click', () => {
    btn.classList.toggle('close')
    menu.classList.toggle('show')
    overLay.classList.toggle('F-bg')
})


let btnSelect = document.querySelectorAll('.select-reward')
let reward = document.querySelector('.support-menu')
for ( let i = 0; i< btnSelect.length; i++){
    btnSelect[i].addEventListener('click', () => {
        reward.classList.toggle('support-menu--hidden')
        overLay.classList.toggle('F-bg')

        console.log('ok')
    })

}

let x = document.querySelector('.support-menu_header__head__close')

x.addEventListener('click', () => {
    if (reward.className = 'support-menu') {
        
        reward.className = 'support-menu support-menu--hidden'
        
    }
    
    overLay.className = 'main-section'
    
    
})


msgBtn.addEventListener('click', () => {
    
    if (msg.className = 'message') {
        msg.className += ' message--hidden'
    }
    overLay.className = 'main-section'
    
})


let rewardBtn = document.querySelectorAll('.reward-btn')

for (let i = 0; i < rewardBtn.length; i++){
    rewardBtn[i].addEventListener('click', () => {
          if (reward.className = 'support-menu') {
        
        reward.className = 'support-menu support-menu--hidden'
        
    }
    
    msg.className = 'message'
    
    // overLay.className = 'main-section'
    })
}


