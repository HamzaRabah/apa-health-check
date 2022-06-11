// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  stsAuthority: 'https://identity.apaleo.com/',
  clientId: 'JLDL-AC-APALEO_HEALTH_CHECK',
  clientRoot: 'http://localhost:4200/',
  clientScope: 'offline_access, accounting.read, availability.read, companies.read, folios.read, integration:ui-integrations.manage, invoices.read, maintenances.read, offer-index.read, offers.read, openid, profile, rateplans.read-corporate, rateplans.read-negotiated, rates.read, reports.read, reservations.read, routings.read, setup.read',
  apiRoot: 'https://api.apaleo.com/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
