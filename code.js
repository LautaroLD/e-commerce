let btn_menu = document.getElementById('btn-menu')
let listId = document.getElementById('listId')
let picture_article = document.getElementById('picture-article')
let arrow_left = document.getElementById('arrow-left')
let arrow_right = document.getElementById('arrow-right')
let plus_amount = document.getElementById('plus-amount')
let amount = document.getElementById('amount')
let minus_amount = document.getElementById('minus-amount')
let cart_amount = document.getElementById('cart_amount')
let cart_items_price = document.getElementById('cart-items-price')
let cart_items_container = document.getElementById('cart-items-container')
let btn_cart_container = document.getElementById('cart-container')
let second_section_cart = document.getElementById('second-section-cart')
let cart_empty_msj = document.getElementById('cart-empty-msj')
let btn_bx_trash = document.getElementById('bx-trash')
let img_container_desktop = document.getElementsByClassName('imgs')
let user_icon = document.getElementById('user-icon')
let user_section_container = document.getElementById('user-section-container')

// btn
user_icon.addEventListener('click', () => {
    if (user_section_container.className == 'user-section') {
        user_section_container.classList.replace('user-section', 'user-section-disable')
    } else {
        if (cart_items_container.className == 'cart-items-container') {
            cart_items_container.classList.replace('cart-items-container', 'cart-items-container-disable')
        }
        user_section_container.classList.replace('user-section-disable', 'user-section')
    }
})
img_container_desktop[0].addEventListener('click', () => {
    picture_article.className = 'back-img1'
})
img_container_desktop[1].addEventListener('click', () => {
    picture_article.className = 'back-img2'
})
img_container_desktop[2].addEventListener('click', () => {
    picture_article.className = 'back-img3'
})
img_container_desktop[3].addEventListener('click', () => {
    picture_article.className = 'back-img4'
})

btn_bx_trash.addEventListener('click', () => {
    second_section_cart.classList.replace('second-section-cart', 'second-section-cart-disable')
    cart_empty_msj.classList.replace('cart-empty-msj-disable', 'cart-empty-msj')
    cart_amount.classList.replace('cart_amount', 'cart_amount-disable')
    cart_amount.innerText = 0
    amount.innerText = 0
})

btn_cart_container.addEventListener('click', () => {
    if (cart_items_container.className == 'cart-items-container-disable') {
        if (user_section_container.className == 'user-section') {
            user_section_container.classList.replace('user-section', 'user-section-disable')
        }
        cart_items_container.classList.replace('cart-items-container-disable', 'cart-items-container')
    } else {
        cart_items_container.classList.replace('cart-items-container', 'cart-items-container-disable')
    }
    if (amount.innerText == 0) {
        second_section_cart.classList.replace('second-section-cart', 'second-section-cart-disable')
        cart_empty_msj.classList.replace('cart-empty-msj-disable', 'cart-empty-msj')
    } else {
        second_section_cart.classList.replace('second-section-cart-disable', 'second-section-cart')
        cart_empty_msj.classList.replace('cart-empty-msj', 'cart-empty-msj-disable')
    }
})

btn_menu.addEventListener('click', () => {
    if (btn_menu.className == 'bx bx-menu') {
        btn_menu.classList.replace('bx-menu', 'bx-x')
        listId.classList.replace('list-disable', 'list')
    } else {
        btn_menu.classList.replace('bx-x', 'bx-menu')
        listId.classList.replace('list', 'list-disable')
    }
})
// arrows
arrow_left.addEventListener('click', () => {
    switch (picture_article.className) {
        case 'back-img1':
            picture_article.classList.replace('back-img1', 'back-img4')
            break;
        case 'back-img2':
            picture_article.classList.replace('back-img2', 'back-img1')
            break;
        case 'back-img3':
            picture_article.classList.replace('back-img3', 'back-img2')
            break;
        case 'back-img4':
            picture_article.classList.replace('back-img4', 'back-img3')
    }
})
arrow_right.addEventListener('click', () => {
    switch (picture_article.className) {
        case 'back-img1':
            picture_article.classList.replace('back-img1', 'back-img2')
            break;
        case 'back-img2':
            picture_article.classList.replace('back-img2', 'back-img3')
            break;
        case 'back-img3':
            picture_article.classList.replace('back-img3', 'back-img4')
            break;
        case 'back-img4':
            picture_article.classList.replace('back-img4', 'back-img1')
    }
})

// amount


plus_amount.addEventListener('click', () => {
    amount.innerText++
    console.log(amount.innerText)
})
minus_amount.addEventListener('click', () => {
    if (amount.innerText > 0) {
        amount.innerText--
        console.log(amount.innerText)
    }
})
function add_to_cart() {
    if (amount.innerText > 0) {
        cart_amount.classList.replace('cart_amount-disable', 'cart_amount')
        cart_amount.innerText = amount.innerText
        console.log(amount.innerText)
        second_section_cart.classList.replace('second-section-cart-disable', 'second-section-cart')
        cart_empty_msj.classList.replace('cart-empty-msj', 'cart-empty-msj-disable')
        total_buy()
    } else if (amount.innerText == 0) {
        reset_amount_cart()
    }
}

function reset_amount_cart() {
    cart_amount.className = 'cart_amount-disable'
    cart_amount.innerText = null
    second_section_cart.classList.replace('second-section-cart', 'second-section-cart-disable')
    cart_empty_msj.classList.replace('cart-empty-msj-disable', 'cart-empty-msj')
    
}

function total_buy() {
    cart_items_price.innerHTML = `: $125.00 x ${amount.innerText} = <b> $${125.00 * amount.innerText}</b>`
}

function close_alert() {
    const msj_container_alert = document.getElementById('msj-container-alert')
    msj_container_alert.classList.replace('msj-container-alert', 'msj-container-alert-disable')
    cart_items_container.classList.replace('cart-items-container', 'cart-items-container-disable')
    reset_amount_cart()
    amount.innerText = 0
}

function open_alert() {
    const msj_container_alert = document.getElementById('msj-container-alert')
    msj_container_alert.classList.replace('msj-container-alert-disable', 'msj-container-alert')

}