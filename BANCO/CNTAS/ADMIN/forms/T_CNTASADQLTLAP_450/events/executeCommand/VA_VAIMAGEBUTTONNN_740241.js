

//Entity: FiltroCliente
//FiltroCliente. (ImageButton) View: formNuevaCuenta
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VAIMAGEBUTTONNN_740241 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = false;
    
    executeCommandEventArgs.commons.viewState.show('G_NUEVACUETT_900241');
    executeCommandEventArgs.commons.api.grid.refresh('QV_FY50_WUN80');


};