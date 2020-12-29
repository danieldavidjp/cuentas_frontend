
//ClienteQuery Entity: Cliente
task.executeQuery.Q_CLIETNNT_ZN50 = function(executeQueryEventArgs){
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.Cliente = true;    
    executeQueryEventArgs.parameters.cedula=executeQueryEventArgs.commons.api.vc.model.FiltroCliente.cedula;

};