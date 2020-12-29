
//CuentaQuery Entity: Cuenta
task.executeQuery.Q_CUENTAAT_QZ46 = function(executeQueryEventArgs){
    executeQueryEventArgs.parameters.numeroCuenta=executeQueryEventArgs.commons.api.vc.model.FiltroCuenta.cuenta;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.Cuenta = true;
};