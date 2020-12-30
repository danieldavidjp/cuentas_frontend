

//Entity: Cuenta
//Cuenta.tipoCuenta (ComboBox) View: formNuevaCuenta
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_TIPOCUENTAFTCJN_619241 = function(  entities, changedEventArgs ) {

    changedEventArgs.commons.execServer = false;
    
    let valor = changedEventArgs.newValue;

    if(valor === "A"){
		changedEventArgs.commons.api.viewState.hide('VA_VABUTTONFVRNBCU_239241');
        changedEventArgs.commons.api.viewState.show('VA_VABUTTONSIBJUHK_359241');

	}else{
        changedEventArgs.commons.api.viewState.hide('VA_VABUTTONSIBJUHK_359241');
		changedEventArgs.commons.api.viewState.show('VA_VABUTTONFVRNBCU_239241');
	}

};