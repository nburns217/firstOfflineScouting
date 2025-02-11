import { BarcodeScanner } from 'react-barcode-scanner'
import "react-barcode-scanner/polyfill"

function Scanner({onCapture}) {
    return (
        <div style={{width: 0}}>
            <BarcodeScanner onCapture={(barcodes) => {
              onCapture(barcodes?.[0]?.rawValue);
            }}  />
        </div>
    )
}

export default Scanner;