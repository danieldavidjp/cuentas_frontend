
//Start signature to Callback event to CM_TCNTASIQ_NRK
task.executeCommandCallback.CM_TCNTASIQ_NRK = function(entities, executeCommandCallbackEventArgs) {
     executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_TB74_MAY78');
     executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_GM19_KUM61');
};
