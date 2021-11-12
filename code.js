let btn_menu = document.getElementById('btn-menu')
let listId = document.getElementById('listId')
let picture_article = document.getElementById('picture-article')
let arrow_left = document.getElementById('arrow-left')
let arrow_right = document.getElementById('arrow-right')
let plus_amount = document.getElementById('plus-amount')
let amount = document.getElementById('amount')
let minus_amount = document.getElementById('minus-amount')
let cart_amount = document.getElementById('cart_amount')

// btn
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
    } else if (amount.innerText == 0) {
        cart_amount.className = 'cart_amount-disable'
        cart_amount.innerText = null
    }
}
