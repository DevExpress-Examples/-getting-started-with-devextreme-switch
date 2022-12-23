<template>
    <DxSwitch 
        :value="false"
        :width="80"
        :rtlEnabled="true"
        :hint="hintMessage"
        @value-changed="onValueChanged($event)"
    > </DxSwitch>
</template>

<script>
import "devextreme/dist/css/dx.light.css";
import { DxSwitch } from "devextreme-vue/switch";
import notify from "devextreme/ui/notify";

export default {
    components: {
        DxSwitch
    },
    data() {
        return {
            hintMessage: "Click to switch on",
        };
    },
    methods: {
        onValueChanged(e) {
            this.hintMessage = e.value ? "Click to switch off" : "Click to switch on";
            const stateLabel = e.value ? "ON" : "OFF";
            notify(`The component is switched ${stateLabel}`);
        }
    }
}
</script>