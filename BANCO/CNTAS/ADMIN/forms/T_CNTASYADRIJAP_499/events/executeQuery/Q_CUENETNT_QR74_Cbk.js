
//Start signature to Callback event to Q_CUENETNT_QR74
task.executeQueryCallback.Q_CUENETNT_QR74 = function(entities, executeQueryCallbackEventArgs) {
     //here your code
    if(entities.CuentaDestino._data.length>0)
        {
            executeQueryCallbackEventArgs.commons.api.viewState.show('CM_TCNTASYA_TM9');
            executeQueryCallbackEventArgs.commons.api.viewState.show('VA_SALDOSTJCRNVDVD_624995');
        }
    else{
            executeQueryCallbackEventArgs.commons.api.viewState.hide('CM_TCNTASYA_TM9');
            executeQueryCallbackEventArgs.commons.api.viewState.hide('VA_SALDOSTJCRNVDVD_624995');
            
        }
};
