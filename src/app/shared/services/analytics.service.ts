import {Injectable} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {isDevMode} from '@angular/core';

declare var umami: any;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private router: Router) {
  }

  initialize() {
    if (isDevMode()) {
      umami = undefined;
      return;
    }
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (!event.url.includes('signin-callback')) this.trackView(event.url);
      }
    });
  }

  trackEvent(event: string, eventType: string = 'click') {
    umami?.trackEvent(event, eventType);
  }

  trackView(url: string) {
    umami?.trackView(url);
  }
}
