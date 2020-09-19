import { Component, VERSION } from "@angular/core";
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animation';

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [ slideInAnimation ]
})

export class AppComponent {
  title = 'My Habits';

  // The AppComponent method that detects when a route change happens.
  // Takes the value of outlet, and returns the state of the animation
  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}