
function Modal({onClose, children}) {
    return (
        <>
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.8)',
                zIndex: 999
            }} 
            onClick={onClose}
            />
            <div style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#282c34',
                padding: '20px',
                borderRadius: '16px',
                boxShadow: '0 0 10px rgba(0,0,0,0.5)',
                zIndex: 1000,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px'
            }}>
                {children}
                <button onClick={onClose}>Close</button>
            </div>
        </>
    );
}

export default Modal;