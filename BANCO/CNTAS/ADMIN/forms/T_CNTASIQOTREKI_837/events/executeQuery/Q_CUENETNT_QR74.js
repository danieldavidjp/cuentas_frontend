
//CuentaDestinoQuery Entity: CuentaDestino
task.executeQuery.Q_CUENETNT_QR74 = function(executeQueryEventArgs){
    executeQueryEventArgs.parameters.cuentaD=executeQueryEventArgs.commons.api.vc.model.FiltroCuenta.cuentaDestino;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.CuentaDestino = true;
};