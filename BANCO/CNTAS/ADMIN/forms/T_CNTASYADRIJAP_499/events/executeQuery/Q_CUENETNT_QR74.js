
//CuentaDestinoQuery Entity: CuentaDestino
task.executeQuery.Q_CUENETNT_QR74 = function(executeQueryEventArgs){
    executeQueryEventArgs.parameters.cuenta=executeQueryEventArgs.commons.api.vc.model.FiltroCuenta.numeroCuenta;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.CuentaDestino = true;
};