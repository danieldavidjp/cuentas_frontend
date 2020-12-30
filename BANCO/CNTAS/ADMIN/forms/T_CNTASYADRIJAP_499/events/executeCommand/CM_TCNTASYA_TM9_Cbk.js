
//Start signature to Callback event to CM_TCNTASYA_TM9
task.executeCommandCallback.CM_TCNTASYA_TM9 = function(entities, executeCommandCallbackEventArgs) {
     //here your code
    executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_IM74_SDK14');
};
