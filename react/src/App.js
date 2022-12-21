import React, { useState, useCallback } from "react";
import "devextreme/dist/css/dx.light.css";

import { Switch } from "devextreme-react/switch";
import notify from "devextreme/ui/notify";

function App() {
    const [hint_message, setHintMessage] = useState("Click to switch on");

    const onValueChanged = useCallback((e) => {
        const message_text = e.value ? "Click to switch off" : "Click to switch on";
        const state_label = e.value ? "ON" : "OFF";
        setHintMessage(message_text);
        notify(`The component is switched ${state_label}`); 
    }, []);
    
    return (
        <Switch 
            value={false}
            width={80}
            rtlEnabled={true}
            hint={hint_message}
            onValueChanged={onValueChanged}
        />
    );
}

export default App;
