const newBtnOrder = document.getElementById('newOrder');
const btnOrder = document.getElementById('orderStatus');

newBtnOrder.addEventListener('click', (event) => {
    event.preventDefault();
    window.location = '/curier/newOrder';
});


btnOrder.addEventListener('click', async (event) => {
    event.preventDefault();

    console.log('I am working!');
})