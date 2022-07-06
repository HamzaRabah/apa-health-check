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
    if (isDevMode()) return;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (!event.url.includes('signin-callback')) this.trackView(event.url);
      }
    });
  }

  trackEvent(event: string, eventType: string = 'click') {
    if (isDevMode()) return;
    umami?.trackEvent(event, eventType);
  }

  trackView(url: string) {
    if (isDevMode()) return;
    umami?.trackView(url);
  }
}
