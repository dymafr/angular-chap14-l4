import { LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import localeFr from "@angular/common/locales/fr";
import { registerLocaleData } from "@angular/common";
import { CbPipe } from "./cb.pipe";
registerLocaleData(localeFr);

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CbPipe],
  bootstrap: [AppComponent],
  providers: [{ provide: LOCALE_ID, useValue: "fr-FR" }]
})
export class AppModule {}
