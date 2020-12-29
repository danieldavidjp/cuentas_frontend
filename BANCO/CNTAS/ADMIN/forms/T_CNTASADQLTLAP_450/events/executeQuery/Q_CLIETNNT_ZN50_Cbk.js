
//Start signature to Callback event to Q_CLIETNNT_ZN50
task.executeQueryCallback.Q_CLIETNNT_ZN50 = function(entities, executeQueryCallbackEventArgs) {
     //here your code
    if(entities.Cliente._data.length > 0) {
        executeQueryCallbackEventArgs.commons.api.viewState.show('G_NUEVACUAAT_999241')
    } else {
        executeQueryCallbackEventArgs.commons.api.viewState.hide('G_NUEVACUAAT_999241')
 
    }
};
