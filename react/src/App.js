import React, { useState, useCallback } from "react";
import "devextreme/dist/css/dx.light.css";

import { Switch } from "devextreme-react/switch";
import notify from "devextreme/ui/notify";

function App() {
    const [hintMessage, setHintMessage] = useState("Click to switch on");

    const onValueChanged = useCallback((e) => {
        const messageText = e.value ? "Click to switch off" : "Click to switch on";
        const stateLabel = e.value ? "ON" : "OFF";
        setHintMessage(messageText);
        notify(`The component is switched ${stateLabel}`); 
    }, []);
    
    return (
        <Switch 
            value={false}
            width={80}
            rtlEnabled={true}
            hint={hintMessage}
            onValueChanged={onValueChanged}
        />
    );
}

export default App;
