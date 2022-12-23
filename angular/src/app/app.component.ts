import { Component } from "@angular/core";
import notify from "devextreme/ui/notify";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})

export class AppComponent {
    hintMessage: string = "Click to switch on";
    onValueChanged(e: {value: boolean}) {
        this.hintMessage = e.value ? "Click to switch off" : "Click to switch on";
        const stateLabel = e.value ? "ON" : "OFF";
        notify(`The component is switched ${stateLabel}`); 
    }
}