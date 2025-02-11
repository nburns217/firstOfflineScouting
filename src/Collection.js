import React, { useState } from 'react';
import { storeInLocalStorage, getFromLocalStorage } from './utilities';
import QRCode from "react-qr-code";
import Modal from './components/Modal';
import Scanner from './components/Scanner';
function Collection() {
  const [barcodeScannerOpen, setBarcodeScannerOpen] = useState(false);
  const [collection, setCollection] = useState({});
  const [fields, setFields] = useState([]);
  const [exportModalOpen, setExportModalOpen] = useState(false);
  const setFieldValue = (field, value) => {
    setCollection({ ...collection, [field]: value });
  }
  return (
    <div className="collection">
        <div className="buttonGrid">
            <button onClick={() => setBarcodeScannerOpen(true)}>Load Fields</button>
            <button onClick={() => storeInLocalStorage("collection", collection)}>Store</button>
            <button onClick={() => setExportModalOpen(true)}>Export</button>
        </div>
        {fields.map((field) => (
            <div key={field.name}>
                <label>{field.name}</label>
                <input type={field.type} value={collection[field.name]} onChange={(e) => setFieldValue(field.name, e.target.value)} />
            </div>
        ))}
        {exportModalOpen && <ExportModal onClose={() => setExportModalOpen(false)} />}
        {barcodeScannerOpen && ( <Scanner onCapture={(data) => {
              setFields(JSON.parse(data));
              setBarcodeScannerOpen(false);
        }} />)}
    </div>
  );
}

function ExportModal({onClose}) {
    const collection = getFromLocalStorage("collection");
    return (
        <Modal onClose={onClose}>
            <QRCode value={`${JSON.stringify(collection)}`} />
        </Modal>    
    );
}

export default Collection;
