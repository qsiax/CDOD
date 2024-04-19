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
        items[i].classList.add('active')
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
        items[i].classList.remove('active')
    })
}

const text = document.querySelectorAll(".home__item-circle-text p");


function splitText() {
    for(let u = 0; u < text.length; u++) {
        text[u].innerHTML = text[u].innerText
        .split("")
        .map(
            (char, i) => `<span style="transform:rotate(${i * 6.5}deg)">${char}</span>`
        )
        .join("");
    }
}

splitText()