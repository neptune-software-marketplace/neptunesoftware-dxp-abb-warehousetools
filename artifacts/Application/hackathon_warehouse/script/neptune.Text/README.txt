Include library in the header:

<!-- QR code JS library  -->
<script src="https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"></script>

<!-- 1D barcode JS library  -->
<script src="https://cdn.jsdelivr.net/npm/jsbarcode@3.11.4/dist/JsBarcode.all.min.js"></script>

<!-- Quagga - Barcode scanning library  -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/quagga/0.12.1/quagga.min.js"></script>

<!-- ZXING - QR code scanning library  -->
<script src="https://unpkg.com/@zxing/library@latest/umd/index.min.js"></script>


CSS to include: 

.previewImage {
    border-radius: 2px;
}

.productListItem {
    width: 100%;
    margin: 0.5rem;
    padding: 1rem;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    display: flex;
    flex-direction: column;
}

.sapFGridListDefault {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(30rem,1fr));
    grid-gap: 0.5rem 0.5rem;
    padding: 1rem;
    margin: 0.5rem;
}

.sapMList {
    margin: -7px;
}

.sapMSFS::after {
    content: "\e08d";
}

Change the name of the HTML Object:QRCode to QRCode1