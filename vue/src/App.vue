<template>
    <DxSwitch 
        :value="false"
        :width="80"
        :rtlEnabled="true"
        :hint="hint_message"
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
            hint_message: "Click to switch on",
        };
    },
    methods: {
        onValueChanged(e) {
            this.hint_message = e.value ? "Click to switch off" : "Click to switch on";
            const state_label = e.value ? "ON" : "OFF";
            notify(`The component is switched ${state_label}`);
        }
    }
}
</script>