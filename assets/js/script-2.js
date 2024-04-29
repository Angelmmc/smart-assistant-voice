document.addEventListener('DOMContentLoaded', function () {
    // Definicion de elementos a modificar en el programa
    const orderResultDiv = document.getElementById('orderResult');
    const controlTexto = document.getElementById("controlTexto");

    let recognition; // Declaración de la variable de reconocimiento fuera del evento DOMContentLoaded

    // Función para inicializar y comenzar el reconocimiento de voz
    function startRecognition() {
        // Comprobar si el navegador soporta reconocimiento de voz
        if ('webkitSpeechRecognition' in window) {
            recognition = new webkitSpeechRecognition();
            recognition.lang = 'es-ES'; // Establecer el idioma a español

            // Configurar evento de resultado
            recognition.onresult = function (event) {
                const resultado = event.results[0][0].transcript;

                result = resultado.toLowerCase();

                console.log('Orden identificada:', result);

                if (result.includes("nugget")) {

                    console.log("entro");


                    switch (true) {
                        // Cambia el tamaño del texto al 5 de bootstrap al decir "tamaño 5"
                        case result.includes("enciende") && result.includes("luz") && result.includes("cuarto"):
                            orderResultDiv.innerHTML = `<p>Orden identificada: <strong>${result}</strong></p>`;
                            console.log("Encender luz del cuarto");
                            putJson(1, 1, 0, 0, 0, 0, 0, 0);
                            postJson("Encender luz del cuarto");
                            break;

                        case result.includes("apaga") && result.includes("luz") && result.includes("cuarto"):
                            orderResultDiv.innerHTML = `<p>Orden identificada: <strong>${result}</strong></p>`;
                            console.log("Apagar luz del cuarto");
                            putJson(0, 1, 0, 0, 0, 0, 0, 0);
                            postJson("Apagar luz del cuarto");
                            break;

                        case result.includes("enciende") && result.includes("luz") && result.includes("sala"):
                            orderResultDiv.innerHTML = `<p>Orden identificada: <strong>${result}</strong></p>`;
                            console.log("Encender luz de la sala");
                            putJson(1, 0, 1, 0, 0, 0, 0, 0);
                            postJson("Encender luz de la sala");
                            break;

                        case result.includes("apaga") && result.includes("luz") && result.includes("sala"):
                            orderResultDiv.innerHTML = `<p>Orden identificada: <strong>${result}</strong></p>`;
                            console.log("Apagar luz de la sala");
                            putJson(0, 0, 1, 0, 0, 0, 0, 0);
                            postJson("Apagar luz de la sala");
                            break;

                        case result.includes("enciende") && result.includes("luces") && result.includes("jardín"):
                            orderResultDiv.innerHTML = `<p>Orden identificada: <strong>${result}</strong></p>`;
                            console.log("Encender luces del jardín");
                            putJson(1, 0, 0, 1, 0, 0, 0, 0);
                            postJson("Encender luces del jardín");
                            break;

                        case result.includes("apaga") && result.includes("luces") && result.includes("jardín"):
                            orderResultDiv.innerHTML = `<p>Orden identificada: <strong>${result}</strong></p>`;
                            console.log("Apagar luces del jardín");
                            putJson(0, 0, 0, 1, 0, 0, 0, 0);
                            postJson("Apagar luces del jardín");
                            break;

                        case result.includes("enciende") && result.includes("ventilador"):
                            orderResultDiv.innerHTML = `<p>Orden identificada: <strong>${result}</strong></p>`;
                            console.log("Encender ventilador");
                            putJson(1, 0, 0, 0, 1, 0, 0, 0);
                            postJson("Encender ventilador");
                            break;

                        case result.includes("apaga") && result.includes("ventilador"):
                            orderResultDiv.innerHTML = `<p>Orden identificada: <strong>${result}</strong></p>`;
                            console.log("Apagar ventilador");
                            putJson(0, 0, 0, 0, 1, 0, 0, 0);
                            postJson("Apagar ventilador");
                            break;

                        case result.includes("abre") && result.includes("cortinas"):
                            orderResultDiv.innerHTML = `<p>Orden identificada: <strong>${result}</strong></p>`;
                            console.log("Abrir cortinas");
                            putJson(1, 0, 0, 0, 0, 1, 0, 0);
                            postJson("Abrir cortinas");
                            break;

                        case result.includes("cierra") && result.includes("cortinas"):
                            orderResultDiv.innerHTML = `<p>Orden identificada: <strong>${result}</strong></p>`;
                            console.log("Cerrar Cortinas");
                            putJson(0, 0, 0, 0, 0, 1, 0, 0);
                            postJson("Cerrar cortinas");
                            break;

                        case result.includes("alarma") && result.includes("desactiva"):
                            orderResultDiv.innerHTML = `<p>Orden identificada: <strong>${result}</strong></p>`;
                            console.log("Desactivar alarma");
                            putJson(0, 0, 0, 0, 0, 0, 1, 0);
                            postJson("Desactivar alarma");
                            break;

                        case result.match("activa") && result.includes("alarma"):
                            orderResultDiv.innerHTML = `<p>Orden identificada: <strong>${result}</strong></p>`;
                            console.log("Activar alarma");
                            putJson(1, 0, 0, 0, 0, 0, 1, 0);
                            postJson("Activar alarma");
                            break;

                        case result.includes("apaga") && result.includes("cámaras"):
                            orderResultDiv.innerHTML = `<p>Orden identificada: <strong>${result}</strong></p>`;
                            console.log("Apagar cámaras");
                            putJson(0, 0, 0, 0, 0, 0, 0, 1);
                            postJson("Apagar cámaras");
                            break;

                        case result.includes("enciende") && result.includes("cámaras"):
                            orderResultDiv.innerHTML = `<p>Orden identificada: <strong>${result}</strong></p>`;
                            console.log("Encender cámaras");
                            putJson(1, 0, 0, 0, 0, 0, 0, 1);
                            postJson("Encender cámaras");
                            break;

                        default:
                            orderResultDiv.innerHTML = `<p>Orden desconocida, intenta de nuevo</p>`;
                            break;
                    }
                }
            }
            // Iniciar reconocimiento
            recognition.start();
        } else {
            alert('El reconocimiento de voz no es soportado por este navegador.');
        }
    }

    // Iniciar reconocimiento al cargar la página
    startRecognition();

    // Intervalo para reiniciar el reconocimiento de voz cada 10 segundos
    setInterval(function () {
        // Detener el reconocimiento de voz
        recognition.stop();
        // Reiniciar y volver a iniciar la escucha
        startRecognition();
    }, 10000);

    // Funcion para guarda ordenes o acciones realizadas de acuerdo a la accion definida en el parametro
    function putJson(status, room, livingRoom, garden, fan, curtain, alarm, camera) {
        // La funcion trabaja con promesas para asegurar que los datos se inserten antes de que se realice la acción ya que si no
        // al cerrar una ventana esto ocurrira antes de que se envien los datos a MockApi
        return new Promise((resolve, reject) => {

            const recursos = [
                { nombre: "room", variable: room },
                { nombre: "livingRoom", variable: livingRoom },
                { nombre: "garden", variable: garden },
                { nombre: "fan", variable: fan },
                { nombre: "curtain", variable: curtain },
                { nombre: "alarm", variable: alarm },
                { nombre: "camera", variable: camera }
            ];

            let recurso;

            for (let i = 0; i < recursos.length; i++) {
                if (recursos[i].variable === 1) {
                    recurso = { [recursos[i].nombre]: status };
                    break;
                }
            }

            if (!recurso) {
                console.log("No se eligió un recurso válido");
            }




            // Se crea un objeto que almacena la fecha obtenida y la accion del parametro


            // Se confierte el objeto a JSON
            const recursoJSON = JSON.stringify(recurso);

            // Se envia la solicitud HTTP a MockAPi usando el metodo POST, cabecera que indica que es Json y el cuerpo del json del objeto
            fetch('https://662f095743b6a7dce30e4068.mockapi.io/status/1', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: recursoJSON
            })
                // Operacion asincrona en la que se espera a la respuesta de MockApi, si esta es invalida se indica que no se subio el archivo
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Error al subir el recurso');
                    }
                    return response.json();
                })
                // Operacion asincrona en la que si la informacion se subio correctamente se devuelve a la consola y la promesa se resuelve
                .then(data => {
                    console.log('Recurso subido exitosamente:', data);
                    resolve(data);
                })
                // Operacion asincrona en la que si la informacion no subio correctamente se devuelve un error en la consola y se rechaza la promesa
                .catch(error => {
                    console.error('Error:', error);
                    reject(error);
                });
        });
    }

    function postJson(orden) {
        // La funcion trabaja con promesas para asegurar que los datos se inserten antes de que se realice la acción ya que si no
        // al cerrar una ventana esto ocurrira antes de que se envien los datos a MockApi
        return new Promise((resolve, reject) => {
            // Definicion de la fecha actual formateandola al formato local de la PC
            const fechaHoraActual = new Date();
            const fechaHoraFormateada = fechaHoraActual.toISOString();

            // Se crea un objeto que almacena la fecha obtenida y la accion del parametro
            const recurso = {
                id: 1,
                order: orden,
                user: "ammc",
                dateTime: fechaHoraFormateada
            };

            // Se confierte el objeto a JSON
            const recursoJSON = JSON.stringify(recurso);

            // Se envia la solicitud HTTP a MockAPi usando el metodo POST, cabecera que indica que es Json y el cuerpo del json del objeto
            fetch('https://660b0491ccda4cbc75dc4478.mockapi.io/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: recursoJSON
            })
                // Operacion asincrona en la que se espera a la respuesta de MockApi, si esta es invalida se indica que no se subio el archivo
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Error al subir el recurso');
                    }
                    return response.json();
                })
                // Operacion asincrona en la que si la informacion se subio correctamente se devuelve a la consola y la promesa se resuelve
                .then(data => {
                    console.log('Recurso subido exitosamente:', data);
                    resolve(data);
                })
                // Operacion asincrona en la que si la informacion no subio correctamente se devuelve un error en la consola y se rechaza la promesa
                .catch(error => {
                    console.error('Error:', error);
                    reject(error);
                });
        });
    }
});
