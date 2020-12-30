
//Start signature to Callback event to Q_CUENETNT_QR74
task.executeQueryCallback.Q_CUENETNT_QR74 = function(entities, executeQueryCallbackEventArgs) {
     if (entities.CuentaDestino._data.length > 0 ){
         executeQueryCallbackEventArgs.commons.api.viewState.show('G_TRANSFEAII_761502')
         executeQueryCallbackEventArgs.commons.api.viewState.show('CM_TCNTASIQ_NRK')
     }
    else{
         executeQueryCallbackEventArgs.commons.api.viewState.hide('G_TRANSFEAII_761502')
         executeQueryCallbackEventArgs.commons.api.viewState.hide('CM_TCNTASIQ_NRK')
    }
};
