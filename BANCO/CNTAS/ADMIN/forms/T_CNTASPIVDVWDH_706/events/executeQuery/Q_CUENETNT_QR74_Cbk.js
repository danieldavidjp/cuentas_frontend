
//Start signature to Callback event to Q_CUENETNT_QR74
task.executeQueryCallback.Q_CUENETNT_QR74 = function(entities, executeQueryCallbackEventArgs) {
     //here your code
    if(entities.CuentaDestino._data.length>0)
        {
            executeQueryCallbackEventArgs.commons.api.viewState.show('CM_TCNTASPI_AN7');
            executeQueryCallbackEventArgs.commons.api.viewState.show('VA_SALDOQGXZZCGZQI_237102');
        }
    else{
            executeQueryCallbackEventArgs.commons.api.viewState.hide('CM_TCNTASPI_AN7');
            executeQueryCallbackEventArgs.commons.api.viewState.hide('VA_SALDOQGXZZCGZQI_237102');
        }
};
