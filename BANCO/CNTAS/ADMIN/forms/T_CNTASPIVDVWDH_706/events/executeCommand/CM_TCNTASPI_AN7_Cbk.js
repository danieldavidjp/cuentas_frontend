
//Start signature to Callback event to CM_TCNTASPI_AN7
task.executeCommandCallback.CM_TCNTASPI_AN7 = function(entities, executeCommandCallbackEventArgs) {
     //here your code
    executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_FJ74_SIF81');
};
