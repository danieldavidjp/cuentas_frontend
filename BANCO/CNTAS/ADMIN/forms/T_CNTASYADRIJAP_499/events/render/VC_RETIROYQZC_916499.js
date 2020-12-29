
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: FormRetiro
task.render = function (entities, renderEventArgs){

    renderEventArgs.commons.api.viewState.hide('VA_SALDOSTJCRNVDVD_624995');
    renderEventArgs.commons.api.viewState.hide('CM_TCNTASYA_TM9');
    renderEventArgs.commons.execServer = false;

};