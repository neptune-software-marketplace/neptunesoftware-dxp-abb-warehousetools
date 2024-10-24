// Check if 1D is selected and set editable property of QR code to false 
// So the user cannot select both options once
if (oCheckBox1D.getSelected(true)) {
    oCheckBoxQR.setEditable(false);
} else {
    // Else - Set editable to true 
    oCheckBoxQR.setEditable(true);

}