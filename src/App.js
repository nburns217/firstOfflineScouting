import React, { useState } from 'react';
import './App.css';
import QRCode from "react-qr-code";

function App() {
  const [url, setUrl] = useState("https://10.0.0.212");
  return (
    <div className="App">
      <div>
        <div>
          URL <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
        </div>
        <div>
          <QRCode value={`${url}`} />
        </div>
      </div>
    </div>
  );
}

export default App;
