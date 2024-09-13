document.getElementById('formReporte').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto
  
    const type = document.getElementById('type').value.trim();
    const breed = document.getElementById('breed').value.trim();
    const size = document.getElementById('size').value.trim();
    const color = document.getElementById('color').value.trim();
    const photos = document.getElementById('photos').files;
    const description = document.getElementById('description').value.trim();
    const location = document.getElementById('location').value.trim();
    const date = document.getElementById('date').value.trim();
    const reporterName = document.getElementById('reporter-name').value.trim();
    const reporterPhone = document.getElementById('reporter-phone').value.trim();
    const reporterEmail = document.getElementById('reporter-email').value.trim();
  
    // Validar los campos del formulario
    if (!type || !size || !description || !location || !date || !reporterName || !reporterPhone || !reporterEmail) {
      Swal.fire({
        title: 'Error!',
        text: 'Todos los campos son obligatorios.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    } else if (photos.length < 3) {
      Swal.fire({
        title: 'Error',
        text: 'Debes subir al menos 3 fotos.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    } else {
      // Mostrar SweetAlert de éxito si todo está bien
      Swal.fire({
        title: 'Éxito',
        text: 'Reporte generado exitosamente',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = 'reporte.html';
        }
      });
    }
  });