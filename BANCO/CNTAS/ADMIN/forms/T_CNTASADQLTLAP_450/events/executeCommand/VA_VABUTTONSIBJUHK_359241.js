

//Entity: Cuenta
//Cuenta. (Button) View: formNuevaCuenta
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONSIBJUHK_359241 = function(  entities, executeCommandEventArgs ) {

    
    let saldo = entities.Cuenta.saldo;
    
    // Validar el saldo inicial
    if(saldo < 50 || saldo > 200 ) {
        let mensaje = 'El saldo inicial debe estar entre 50 y 200';
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation(mensaje);
        executeCommandEventArgs.commons.execServer = false;
        return;
    }
    
    // Retorna un numero aleatorio de 10 digitos
    const obtenerNumeroCuenta = () => {
        return Math.floor(Math.random() * 1000000000 + 1000000000);
    } 
    
    entities.Cuenta.numeroCuenta = obtenerNumeroCuenta(); 
    entities.Cuenta.cedulaCliente = entities.Cliente._data[0].cedula;
    
    executeCommandEventArgs.commons.execServer = true;

};