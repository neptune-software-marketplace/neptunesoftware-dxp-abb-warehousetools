// Randomly generate a serial number for a new product
var serialNum = Math.floor((Math.random() * 10000) + 1);

// Set the serial number to the input field 
oInputSerialNumber.setValue(serialNum);

// Set the input field editable to false 
oInputSerialNumber.setEditable(false);

// Navigate to the Add product page
oApp.to(oPageAddProduct);