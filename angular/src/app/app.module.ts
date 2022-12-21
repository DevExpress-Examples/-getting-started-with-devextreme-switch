import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { DxSwitchModule } from "devextreme-angular";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DxSwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
