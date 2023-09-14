const btnDelivered = document.querySelector('.btnDelivered');

btnDelivered.addEventListener('click', async (event) => {
    event.preventDefault();

    const { id } = btnDelivered.dataset;

    const response = await fetch('/curier/moreDetailed/delivered', {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify( { id } ),
    });

    if (response.status === 200) {
        window.location = '/curier';
    }
})

const btnCompleted = document.querySelector('.btnCompleted');

btnCompleted.addEventListener('click', async (event) => {
    event.preventDefault();

    const { id } = btnCompleted.dataset;

    const response = await fetch('/curier/moreDetailed/complited', {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify( { id } ),
    });

    if (response.status === 200) {
        window.location = '/curier';
    }
})
