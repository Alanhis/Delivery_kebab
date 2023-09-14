const btnDelete = document.querySelectorAll('.deleteNewOrder');

if (btnDelete) {
    btnDelete.forEach(element => {
        element.addEventListener('click', async (event) => {
            event.preventDefault();

            const { id } = element.dataset;

            const response = await fetch('/curier', {
                method: 'delete',
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
    });   
}
