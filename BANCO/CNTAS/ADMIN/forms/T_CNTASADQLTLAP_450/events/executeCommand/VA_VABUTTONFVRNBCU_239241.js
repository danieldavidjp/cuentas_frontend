

//Entity: Cuenta
//Cuenta. (Button) View: formNuevaCuenta
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONFVRNBCU_239241 = function(  entities, executeCommandEventArgs ) {
    
    let saldo = entities.Cuenta.saldo;
    
    if(saldo < 50 || saldo > 100 ) {
        let mensaje = 'El saldo inicial debe estar entre 50 y 100';
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation(mensaje);
        executeCommandEventArgs.commons.execServer = false;
        return;
    }
    
    const obtenerNumeroCuenta = () => {
        return Math.floor(Math.random() * 1000000000 + 1000000000);
    } 
    
    entities.Cuenta.numeroCuenta = obtenerNumeroCuenta();
    entities.Cuenta.cedulaCliente = entities.Cliente._data[0].cedula;
    
    executeCommandEventArgs.commons.execServer = true;
    
    
            //  Para enviar mensaje use
        //  eventArgs.commons.messageHandler.showMessagesInformation('Ejecutando comando personalizado');

        //  Para evitar que se continue con la validación a nivel de servidor
        //  eventArgs.commons.execServer = false;

};