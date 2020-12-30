
//CuentaOrigenQuery Entity: CuentaOrigen
task.executeQuery.Q_CUENREAG_AS19 = function(executeQueryEventArgs){
    executeQueryEventArgs.parameters.cuentaO=executeQueryEventArgs.commons.api.vc.model.FiltroCuenta.numeroCuenta;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.CuentaOrigen = true;
};