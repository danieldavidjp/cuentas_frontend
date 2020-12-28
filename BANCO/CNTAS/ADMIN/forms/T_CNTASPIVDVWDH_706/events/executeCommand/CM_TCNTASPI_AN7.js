


//Command1 (Button) 
task.executeCommand.CM_TCNTASPI_AN7 = function(entities, executeCommandEventArgs) {
    executeCommandEventArgs.commons.execServer = false;
    
//Open Modal
var nav = executeCommandEventArgs.commons.api.navigation;

    nav.label = 'Depositar';
nav.address = {
moduleId: 'CNTAS',
subModuleId: 'ADMIN',
taskId: 'T_CNTASRMFVUVGE_622',
taskVersion: '1.0.0',
viewContainerId: 'VC_DEPORETIRR_402622'
};

    nav.queryParameters = {
    mode: 1
    };
    nav.modalProperties = {
    size: 'md',
    callFromGrid: false
    };


//Si la llamada es desde un evento de un control perteneciente a la cabecera de la página
//nav.openModalWindow(args.commons.controlId, null);
//Si la llamada es desde un evento de un control perteneciente a una grilla de la página
//nav.openModalWindow(id, args.modelRow);
};