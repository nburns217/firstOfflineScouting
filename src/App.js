import React, { useState } from 'react';
import './App.css';
import QRCode from "react-qr-code";
import Collection from './Collection';
import Modal from './components/Modal';
import Scanner from './components/Scanner';
import SetFormsModal from './components/SetFormsModal';
function App() {
  const [downloadQRCodeModalOpen, setDownloadQRCodeModalOpen] = useState(false);
  const [barcodeScannerOpen, setBarcodeScannerOpen] = useState(false);
  const [fieldsModalOpen, setFieldsModalOpen] = useState(false);
  const [scannedData, setScannedData] = useState(null);
  const [setFormsModalOpen, setSetFormsModalOpen] = useState(false);
  return (
    <div className="App">
      <div>
        <div className="buttonGrid">
          <button onClick={() => setDownloadQRCodeModalOpen(true)}>Download QR Code</button>
          <button onClick={() => setBarcodeScannerOpen(true)}>Scan Barcode</button>
          <button onClick={() => setFieldsModalOpen(true)}>Fields</button>
          <button onClick={() => setSetFormsModalOpen(true)}>Set Forms</button>
          
          {downloadQRCodeModalOpen && <DownloadQRCodeModal onClose={() => setDownloadQRCodeModalOpen(false)} />}  
          {scannedData && <div>{scannedData}</div>}
          {barcodeScannerOpen && (
            <Scanner onCapture={(data) => {
              setScannedData(data);
              setBarcodeScannerOpen(false);
            }} />
          )}
          {fieldsModalOpen && <FieldsModal onClose={() => setFieldsModalOpen(false)} />}
          {setFormsModalOpen && <SetFormsModal onClose={() => setSetFormsModalOpen(false)} />}
        </div>
        <Collection />
      </div>
    </div>
  );
}

function DownloadQRCodeModal({onClose}) {
  return (
    <Modal onClose={onClose}>
      <QRCode size={256} value={`https://10.10.21.52:8080/`} />
    </Modal>
  );
}

function FieldsModal({onClose}) {
  const fields = JSON.parse(localStorage.getItem('fields'));
  return (
    <Modal onClose={onClose}>
      <QRCode size={256} value={JSON.stringify(fields)} />
    </Modal>
  );
}

export default App;
