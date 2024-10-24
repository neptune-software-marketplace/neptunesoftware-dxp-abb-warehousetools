// Add product function

function submit() {

    // let getValcomponents = [inputName];
    let getValcomponents = [oInputProdName, oInputSerialNumber, oInputPrice, oInputCurrency];
    getValcomponents.forEach(component => component.setValueState("None"));

    // **** VALIDATION SECTION ******
    // Use "Return" to get out of the script
    if (oInputProdName.getValue() === "") {
        oInputProdName.setValueState("Error")
        sap.m.MessageToast.show("Please provide a Product name");
        return
    };

    if (oInputPrice.getValue() === "") {
        oInputPrice.setValueState("Error")
        sap.m.MessageToast.show("Please provide a Price");
        return
    };

    if (oInputCurrency.getValue() === "") {
        oInputCurrency.setValueState("Error")
        sap.m.MessageToast.show("Please provide a Currency");
        return
    };

    if (oInputAvailability.getValue() === "") {
        oInputAvailability.setValueState("Error")
        sap.m.MessageToast.show("Please provide product Availability");
        return
    };

    // QR Code selection
    if (oCheckBoxQR.getSelected(true)) {

        var qr = new QRCode(document.getElementById("qrcode1"), oInputProdName.getValue());

        console.log(qr);

        // Convert QR code to base64
        var img = qr._oDrawing._elCanvas.toDataURL("image/png");

        console.log(img);

        // 1D Barcode selection
    } else if (oCheckBox1D.getSelected(true)) {

        var canvas = document.getElementById('barcode');
        var barcode = JsBarcode(canvas, oInputSerialNumber.getValue());

        console.log(barcode);

        // Convert 1D code to base64 
        var img = canvas.toDataURL();

        console.log(img);

    }


    // Create the empty Object
    let final_data = {}

    // Add attributes to the Object, based on the inputs
    final_data.PRODNAME = oInputProdName.getValue();
    final_data.SERIALNUM = oInputSerialNumber.getValue();
    final_data.PRICE = oInputPrice.getValue();
    final_data.CURRENCY = oInputCurrency.getValue();
    final_data.IMAGE = oImagePreview.getSrc();
    final_data.AVAILABILITY = oInputAvailability.getValue();
    final_data.QRCODE = img;

    // Log the Object
    console.log(final_data);

    // Assign the data object to "Options"
    var options = { data: final_data };

    // Trigger the API and pass the "Options"
    apioRestAPIPostProduct(options);

    // Call the function to clear the form
    clearForm();

    // Message toast 
    sap.m.MessageToast.show("Product successfully added!");

    // Navigate to Products Page
    oApp.to(oPageProduct);

}

//-----------------------------------------------------------------------//

// Clear form function

function clearForm() {

    // Assign input fields to a variable 
    let getValcomponents = [oInputProdName, oInputSerialNumber, oInputAvailability, oInputPrice, oInputCurrency];

    // Arrow function:
    getValcomponents.forEach(component => component.setValue(""));

    // Set Image source to empty string
    oImagePreview.setSrc("");
    oLabelPreview.setVisible(false);

    // Set the checkboxes to their initial state - Unchecked 
    oCheckBox1D.setSelected(false);
    oCheckBoxQR.setSelected(false);

    // Set the checkboxes to their initial state - Editable
    oCheckBox1D.setEditable(true);
    oCheckBoxQR.setEditable(true);

}


