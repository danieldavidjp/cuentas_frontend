
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: FormDeposito
task.render = function (entities, renderEventArgs){
    renderEventArgs.commons.api.viewState.hide('VA_SALDOQGXZZCGZQI_237102');
    renderEventArgs.commons.api.viewState.hide('CM_TCNTASPI_AN7');
    renderEventArgs.commons.execServer = false;
    
    

};