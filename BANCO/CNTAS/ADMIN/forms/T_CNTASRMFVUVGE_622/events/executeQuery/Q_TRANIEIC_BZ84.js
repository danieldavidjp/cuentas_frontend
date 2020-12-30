
//TransaccionesQuery Entity: Transacciones
task.executeQuery.Q_TRANIEIC_BZ84 = function(executeQueryEventArgs){
    executeQueryEventArgs.parameters.cuenta=executeQueryEventArgs.commons.api.vc.model.FiltroCuenta.numeroCuenta;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.Transacciones = true;
};