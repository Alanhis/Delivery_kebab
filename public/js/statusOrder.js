const newBtnOrder = document.getElementById('newOrder');
const btnOrder = document.querySelectorAll('.orderStatus');
const btndeliverStatus = document.querySelectorAll('.deliverStatus');

newBtnOrder.addEventListener('click', (event) => {
    event.preventDefault();
    window.location = '/curier/newOrder';
});

if (btnOrder) {
    btnOrder.forEach(element => {
        element.addEventListener('click', async (event) => {
            event.preventDefault();
            
            const { id } = element.dataset;

            window.location = `/curier/moreDetailed/${id}`;
        });
    })
}

if(btndeliverStatus) {
    btndeliverStatus.forEach(element => {
        element.addEventListener('click', async (event) => {
            event.preventDefault();
            
            const { id } = element.dataset;

            window.location = `/curier/moreDetailed/${id}`;
        });
    })
}
