// Initializing ZXing code reader 

let selectedDeviceId;

const codeReader = new ZXing.BrowserMultiFormatReader()
console.log('ZXing code reader initialized')
codeReader.listVideoInputDevices()
    .then((videoInputDevices) => {
        selectedDeviceId = videoInputDevices[0].deviceId;

    })
    .catch((err) => {
        console.error(err)
    })

//-----------------------------------------------------------------------//

// Start scanning function 

function startScan() {


    codeReader.decodeFromVideoDevice(selectedDeviceId, 'reader', (result, err) => {
        if (result) {
            // console result to see the output of the scan
            console.log(result);

            // To view only value of the scan
            console.log(result.text);

            // Sets the scanned value to the search field 
            oSearchField.setValue(result.text)

            // Fire press the search field - Auto search 
            oSearchField.fireLiveChange();
            
            // Calling the stopScan function - stop scanning 
            stopScan();

        }
        
        // Error log

        if (err && !(err instanceof ZXing.NotFoundException)) {
            console.error(err)

        }
    })

}

//-----------------------------------------------------------------------//

// Stop scanning function

function stopScan() {

    // Close dialog
    oDialogScan.close();

    // Stop scanner 
    codeReader.reset();

}

//  Read further about different implementation procedure on github -https://github.com/zxing-js/library


