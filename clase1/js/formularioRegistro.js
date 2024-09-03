document.getElementById('formRegistro').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto
  
    const name = document.getElementById('name').value.trim();
    const photos = document.getElementById('photos').files;
  
    if (!name) {
      Swal.fire({
        title: 'Error!',
        text: 'El campo de nombre es obligatorio.',
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
      Swal.fire({
        title: 'Éxito',
        text: 'Formulario registrado exitosamente',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = 'registro.html';
        }
      });
    }
  });

