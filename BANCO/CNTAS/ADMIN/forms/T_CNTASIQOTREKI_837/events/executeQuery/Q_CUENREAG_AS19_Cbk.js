
//Start signature to Callback event to Q_CUENREAG_AS19
task.executeQueryCallback.Q_CUENREAG_AS19 = function(entities, executeQueryCallbackEventArgs) {
     if (entities.CuentaOrigen._data.length > 0 ){
         executeQueryCallbackEventArgs.commons.api.viewState.show('G_TRANSFEEAR_676502')
         executeQueryCallbackEventArgs.commons.api.viewState.show('G_TRANSFERRE_934502')
     }
    else{
         executeQueryCallbackEventArgs.commons.api.viewState.hide('G_TRANSFEEAR_676502')
         executeQueryCallbackEventArgs.commons.api.viewState.hide('G_TRANSFERRE_934502')
    }
};
