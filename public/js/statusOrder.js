const newBtnOrder = document.getElementById('newOrder');
const btnOrder = document.getElementById('orderStatus');

newBtnOrder.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('New Order!');
    
})


btnOrder.addEventListener('click', async (event) => {
    event.preventDefault();

    console.log('I am working!');
})