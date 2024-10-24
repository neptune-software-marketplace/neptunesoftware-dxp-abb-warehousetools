// Function to clear the form
function fclear() {

    inoSimpleFormprod_name.setValue("");
    inoSimpleFormInicialStock.setValue("");
    inoSimpleFormAddProductunit_mesure.setValue("");
    inoSimpleFormAddProductref.setValue("");
    oImage.setSrc("");
    inoSimpleFormprod_name.setValueState("None")
    inoSimpleFormInicialStock.setValueState("None")
    inoSimpleFormAddProductunit_mesure.setValueState("None")
    inoSimpleFormAddProductref.setValueState("None")
}

function submit() {
    // **** VALIDATION SECTION ******
    // Use "Return" to get out of the script
    if (inoSimpleFormprod_name.getValue() === "") {
        inoSimpleFormprod_name.setValueState("Error")
        sap.m.MessageToast.show("Please provide a Product name");
        return
    };

    if (inoSimpleFormInicialStock.getValue() === "") {
        inoSimpleFormInicialStock.setValueState("Error")
        sap.m.MessageToast.show("Please provide a Inicial Stock");
        return
    };

    if (inoSimpleFormAddProductunit_mesure.getValue() === "") {
        inoSimpleFormAddProductunit_mesure.setValueState("Error")
        sap.m.MessageToast.show("Please provide a Unit Mesure");
        return
    };

    if (inoSimpleFormAddProductref.getValue() === "") {
        inoSimpleFormAddProductref.setValueState("Error")
        sap.m.MessageToast.show("Please provide product Referenc");
        return
    };

    // Create the empty Object
    let final_info = {}

    // Add attributes to the Object, based on the inputs
    final_info.prod_name = inoSimpleFormprod_name.getValue();
    final_info.stock_lost = 0;
    final_info.image = oImage.getSrc();
    final_info.stock_available = inoSimpleFormInicialStock.getValue();
    final_info.stock_Inicial = inoSimpleFormInicialStock.getValue();
    final_info.ref = inoSimpleFormAddProductref.getValue();
    final_info.unit_mesure = inoSimpleFormAddProductunit_mesure.getValue();
    var options = { data: final_info };


    if (!AppCache.isOffline) {
        console.log("Online");
        apioRestAPIAddProduct(options);
    } else {

        // Log the Object
        console.log(final_info);
  // Update the modelArray when the apps is offline 
        ModelData.Add(oModelArrayAddProd, final_info);

        // Add Data
        ModelData.Add(oGridList, final_info);
    }

    oApp.back();
    fclear();
}

window.addEventListener("offline", onOffline, false);
window.addEventListener("online", onOnline, false);

function onOffline() {

    sap.m.MessageToast.show("Offline!");

}

function onOnline() {

    sap.m.MessageToast.show("Online!");

    // oButtonCallAPI.setVisible(true);
    var offlineData = modeloModelArrayAddProd.getData();

    // Assign the data object to "Options"
    var options = { data: offlineData };
   
    // Trigger the API and pass the "Options"
     apioRestAPIAddProduct(options);

}
// Funtion to Randomly generate a serial number for a new product
function reference(){

 // Randomly generate a serial number for a new product
var serialNum = Math.floor((Math.random() * 10000) + 1);
// Set the serial number to the input field 
inoSimpleFormAddProductref.setValue(serialNum);

// Set the input field editable to false 
inoSimpleFormAddProductref.setEditable(false);   

oHTMLObjectCameraUpload.setContent('<input type="file" accept="image/*" id="file-input"  style="display:none" multiple>')

}