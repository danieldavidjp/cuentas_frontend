
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: FormTransferencia
task.render = function (entities, renderEventArgs){
    
    renderEventArgs.commons.api.viewState.hide('G_TRANSFEEAR_676502');
    renderEventArgs.commons.api.viewState.hide('G_TRANSFERRE_934502');
    renderEventArgs.commons.api.viewState.hide('G_TRANSFEAII_761502');
    renderEventArgs.commons.api.viewState.hide('CM_TCNTASIQ_NRK');
    
    renderEventArgs.commons.execServer = false;

};