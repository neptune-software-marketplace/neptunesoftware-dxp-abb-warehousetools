// Set the File-Input to the oHTMLObject
sap.ui.getCore().attachInit(function(data) {
    oHTMLObjectCameraUpload.setContent('<input type="file" accept="image/*" id="file-input"  style="display:none" multiple>')

reference();
});

// After setting the oHTMLObject, create the EventListener
setTimeout(function() {
    const fileInput = oFlexBoxCameraUpload.getDomRef();
    fileInput.addEventListener('change', (e) => handleFileSelect(e.target.files[0]));
}, 1000);

// Callback function from EventListener
function handleFileSelect(f) {
    var reader = new FileReader();

    reader.onload = (function (theFile) {
        return function (e) {
            var binaryData = e.target.result;

            // Converting Binary Data to base 64
            var base64String = window.btoa(binaryData);

            var fullBase64picture = "data:image/png;base64," + base64String;
            //console.log(base64String)

            oImage.setSrc(fullBase64picture);

        };
    })(f);
    reader.readAsBinaryString(f);
}