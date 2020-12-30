
//CuentaQuery Entity: Cuenta
task.executeQuery.Q_CUENTAAT_QZ46 = function(executeQueryEventArgs){
    executeQueryEventArgs.parameters.cuenta=executeQueryEventArgs.commons.api.vc.model.FiltroCuenta.numeroCuenta;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.Cuenta = true;
};