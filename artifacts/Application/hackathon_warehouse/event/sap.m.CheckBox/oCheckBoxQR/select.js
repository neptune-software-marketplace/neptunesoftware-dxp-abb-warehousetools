// Check if QR is selected and set editable property of 1D code to false 
// So the user cannot select both options once
if (oCheckBoxQR.getSelected(true)) {
    oCheckBox1D.setEditable(false);
} else {
    // Else - set editable to true
    oCheckBox1D.setEditable(true);
}