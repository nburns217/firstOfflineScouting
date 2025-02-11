import { useState } from "react";
import Modal from "./Modal";

const SetFormsModal = ({onClose}) => {
    const [fields, setFields] = useState([]);

    const addField = () => {
        setFields([...fields, {
            name: '',
            type: 'text'
        }]);
    };

    const removeField = (index) => {
        const newFields = fields.filter((_, i) => i !== index);
        setFields(newFields);
    };

    const updateField = (index, key, value) => {
        const newFields = [...fields];
        newFields[index][key] = value;
        setFields(newFields);
    };

    const saveFields = () => {
        localStorage.setItem('fields', JSON.stringify(fields));
        onClose();
    };

    return (
        <Modal onClose={onClose}>
            <div style={{color: 'white', padding: '20px'}}>
                <h2>Configure Form Fields</h2>
                {fields.map((field, index) => (
                    <div key={index} style={{marginBottom: '10px'}}>
                        <input
                            type="text"
                            placeholder="Field name"
                            value={field.name}
                            onChange={(e) => updateField(index, 'name', e.target.value)}
                            style={{marginRight: '10px'}}
                        />
                        <select 
                            value={field.type}
                            onChange={(e) => updateField(index, 'type', e.target.value)}
                            style={{marginRight: '10px'}}
                        >
                            <option value="text">Text</option>
                            <option value="number">Number</option>
                            <option value="date">Date</option>
                            <option value="email">Email</option>
                        </select>
                        <button onClick={() => removeField(index)}>Remove</button>
                    </div>
                ))}
                <div style={{marginTop: '20px'}}>
                    <button onClick={addField} style={{marginRight: '10px'}}>Add Field</button>
                    <button onClick={saveFields}>Save Fields</button>
                </div>
            </div>
        </Modal>
    );
};

export default SetFormsModal;