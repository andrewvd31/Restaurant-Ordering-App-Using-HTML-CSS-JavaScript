import { foodData } from "/data.js"
const orderCompletedModal = document.getElementById('order-completion-modal')
const completeOrderBtn = document.getElementById('complete-order')
const closeModalBtn = document.querySelector('.close-modal')
const clearRequests = document.getElementById('red-color')
const orderId = document.getElementById('order-id')
const payBtn = document.querySelector('.pay-finish')
const refreshBtn = document.querySelector('.refresh-btn')
let totalPrice = 0

refreshBtn.addEventListener('click',refreshBtnFunction)

clearRequests.addEventListener('click',clearRequestsFunction)

completeOrderBtn.addEventListener('click',completeOrderBtnFunction)

closeModalBtn.addEventListener('click',closeModalBtnFunction)

payBtn.addEventListener('click',payBtnFunction)

function refreshBtnFunction(){
    document.querySelector('.orders-para').textContent = "Your orders"
    refreshBtn.style.display = "none"
}

function payBtnFunction(){
    clearRequests.style.display = "none"
    document.querySelector('.payment-details-modal').style.display = "none"
    document.querySelector('.orders-para').textContent = "Your order has been placed successfully"
    refreshBtn.style.display = "block"
    orderCompletedModal.innerHTML = ''
    document.getElementById('order-list-total').style.display = "none"
    completeOrderBtn.style.display = "none"
    totalPrice = 0
}

function clearRequestsFunction(){
    orderCompletedModal.innerHTML  = ''
    orderId.style.display = "none"
    totalPrice = 0
}

function closeModalBtnFunction(){
    document.querySelector('.payment-details-modal').style.display = "none"
}

function completeOrderBtnFunction(){
    document.querySelector('.payment-details-modal').style.display = "block"
}

document.addEventListener('click',function(e){
    if(e.target.id){
        foodData.forEach(function(food){
            if (e.target.id === food.uuid){
                orderId.style.display = "block"
                e.preventDefault()
                let orderCompleted = ""
                orderCompleted += 
                `
                <div class="order-list" id="order-list">
                    <p>${food.food}</p>
                    <p id="price">$${food.cost}</p>
                </div>
                `
                orderCompletedModal.innerHTML  += orderCompleted
                totalPrice += food.cost
            }
            document.getElementById('total-price').textContent = `$${totalPrice}`
            document.getElementById('order-list-total').style.display = "flex"
            document.getElementById('red-color').style.display = "block"
            document.getElementById('complete-order').style.display = "block"
        })
    }
})

function foodHtml(){
    let foodItemHtml = ""
    foodData.forEach(function(foodItem)
        {
            foodItemHtml += 
            `<div class="food-container">
                <div class="food-img">
                    <img src="${foodItem.image}" alt="Image">
                </div>
                <div class="food-description">
                    <div class="main-description">
                        <p class="food-name">${foodItem.food}</p>
                        <p class="food-ingredients">${foodItem.ingredients}</p>
                        <p class="price-tag">$${foodItem.cost}</p>
                    </div>
                <div class="add-button-container">
                    <button class="add-button" id="${foodItem.uuid}">+</button>
                </div>
                </div>
            </div>
            `
        }
    )
    return foodItemHtml
}

function renderFoods(){
    document.getElementById('food-section').innerHTML = foodHtml()
}

renderFoods()