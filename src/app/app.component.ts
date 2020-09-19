import { Component, Injector } from "@angular/core";
import { createCustomElement } from '@angular/elements';
import { PopupService } from './popup.service';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: "my-app",
  template: `<input #input value="Message">
<button (click)="popup.showAsComponent(input.value)">Show as component</button>`,
  // templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent {
    constructor(injector: Injector, public popup: PopupService) {
    // Convert `PopupComponent` to a custom element.
    const PopupElement = createCustomElement(PopupComponent, {injector});
    // Register the custom element with the browser.
    customElements.define('popup-element', PopupElement);
  }
}
