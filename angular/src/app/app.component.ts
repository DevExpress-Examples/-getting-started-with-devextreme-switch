import { Component } from "@angular/core";
import notify from "devextreme/ui/notify";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})

export class AppComponent {
    hint_message: string = "Click to switch on";
    onValueChanged(e: {value: boolean}) {
        this.hint_message = e.value ? "Click to switch off" : "Click to switch on";
        const state_label = e.value ? "ON" : "OFF";
        notify(`The component is switched ${state_label}`); 
    }
}