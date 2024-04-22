const menu = document.querySelector('.menu')
const menuBtn = document.querySelector('.header__menu-wrapper')

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
    menuBtn.classList.toggle('active')
    if (menu.classList.contains('active')) {
        menuBtn.innerHTML = '<div class="header__menu _icon-close"></div>'
    } else {
        menuBtn.innerHTML = '<div class="header__menu _icon-menu"></div>'
    }
})

const items = document.querySelectorAll('.home__item')

function allUnactive() {
    for (let i = 0; i < items.length; i++) {
        items[i].classList.add('unactive')
    }
}

function allActive() {
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('unactive')
    }
}

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('mouseover', () => {
        allUnactive()
    })
    items[i].addEventListener('mousemove', (e) => {
        let x = e.offsetX
        let y = e.offsetY

        let itemHeight = items[i].clientHeight
        let itemWidth = items[i].clientWidth

        let moveX = (x - itemWidth / 2)
        let moveY = (y - itemHeight / 2)

        items[i].style.transform = `translateX(${moveX}px) translateY(${moveY}px)`
    })
    items[i].addEventListener('mouseout', (e) => {
        items[i].style.transform = ``;
        allActive()
    })
}

const header = document.querySelector('.header')

window.addEventListener('scroll', (e) => {
    const windowY = window.pageYOffset

    if( windowY > 860) {
        header.classList.add('sticky')
    }
    if( windowY < 860) {
        header.classList.remove('sticky')
        menu.classList.remove('active')
        menuBtn.classList.remove('active')
        menuBtn.innerHTML = '<div class="header__menu _icon-menu"></div>'
    }
})

const hoverEl = document.querySelector('.rukovodstvo__item-hover')
const hoverItems = document.querySelectorAll('.rukovodstvo__item')

document.addEventListener('mousemove', (e) => {
    hoverEl.style.left = (e.pageX + 20) + 'px'
    hoverEl.style.top = e.pageY + 'px'
})

for (i = 0; i < hoverItems.length; i++) {
    hoverItems[i].addEventListener('mouseover', (e) => {
        hoverEl.classList.add('active')
        if (e.currentTarget === hoverItems[0]) {
            hoverEl.innerHTML = 'Cпециалист по организации работы "Движение Первых" МР "Хангаласский улус"'
        } 
        if (e.currentTarget === hoverItems[1]) {
            hoverEl.innerHTML = 'Председатель местного отделения МР "Хангаласский улус"'
        }
        if (e.currentTarget === hoverItems[2]) {
            hoverEl.innerHTML = 'Специалист по организации работы "Движение Первых" МР "Хангаласский улус"'
        }
    })
    hoverItems[i].addEventListener('mouseout', (e) => {
        hoverEl.classList.remove('active')
        hoverEl.innerHTML = ''
    })
}