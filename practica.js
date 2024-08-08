// let mesas = [null, null, null, null];
    
//     function tomarReserva() {
//         while (true) {
//             // Pedir datos al usuario
//             let nombreCliente = prompt("Ingrese el nombre para la reserva:");
//             if (!nombreCliente) {
//                 alert("Por favor, ingrese un nombre válido.");
//                 continue;
//             }
//             let cantidadPersonas = prompt("Ingrese la cantidad de personas:");
//             cantidadPersonas = parseInt(cantidadPersonas);
//             if (isNaN(cantidadPersonas) || cantidadPersonas <= 0) {
//                 alert("Por favor, ingrese una cantidad de personas válida.");
//                 continue;
//             }
            
//             // Buscar una mesa disponible
//             let mesaReservada = false;
//             for (let i = 0; i < mesas.length; i++) {
//                 if (mesas[i] === null) {
//                     mesas[i] = {
//                         nombreCliente: nombreCliente,
//                         cantidadPersonas: cantidadPersonas
//                     };
//                     alert(`Reserva confirmada para ${nombreCliente} en la mesa ${i + 1} para ${cantidadPersonas} personas.`);
//                     mesaReservada = true;
//                     break;
//                 }
//             }
            
//             if (!mesaReservada) {
//                 alert("Lo siento, no hay mesas disponibles.");
//             }
            
//             // Preguntar al usuario si desea hacer otra reserva
//             let otraReserva = confirm("¿Desea realizar otra reserva?");
//             if (!otraReserva) {
//                 break;
//             }
//         }
//     }
    
//     // Iniciar el proceso de reservacion
//     tomarReserva();

const nombreCorrecto = "Abril";

    function validarUsuario() {
        while (nombreCorrecto.toLowerCase) {
            let nombreUsuario = prompt("Ingrese su nombre:");
            if (nombreUsuario === nombreCorrecto) {
                alert("Bienvenida, " + nombreUsuario + "! Puedes pasar.");
                break;
            } else {
                alert("Nombre incorrecto. Inténtelo de nuevo.");
            }
        }
    }

    // Iniciar el proceso de validación
    validarUsuario();