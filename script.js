document.getElementById('reservationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    fetch('https://script.google.com/macros/s/AKfycbwF_xX5PvGfFqQv_B7E6Af0kSbxSsr94QHenNWeFdfjEC7n998czk3eYlNWjGvkwIDwVw/exec', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.result === 'success') {
            alert('¡Reserva realizada con éxito!');
            form.reset();
        } else {
            alert('Hubo un error al enviar la reserva. Inténtalo de nuevo.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un error al enviar la reserva. Inténtalo de nuevo.');
    });
});
