
//Start signature to Callback event to Q_CUENTAAT_QZ46
task.executeQueryCallback.Q_CUENTAAT_QZ46 = function(entities, executeQueryCallbackEventArgs) {
     if (entities.cuenta._data.length > 0 ){
         executeQueryCallbackEventArgs.commons.api.viewState.show('G_TRANSFEEAR_676502')
         executeQueryCallbackEventArgs.commons.api.viewState.show('G_TRANSFERRE_934502')
     }
    else{
         executeQueryCallbackEventArgs.commons.api.viewState.hide('G_TRANSFEEAR_676502')
         executeQueryCallbackEventArgs.commons.api.viewState.hide('G_TRANSFERRE_934502')
    }
};