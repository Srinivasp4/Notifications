// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
  	apiKey: "AIzaSyAdT0hXNp893zhka5lofmg1rBLr1Ll81NM",
	authDomain: "simple-notification-d7166.firebaseapp.com",
	databaseURL: "https://simple-notification-d7166.firebaseio.com",
	projectId: "simple-notification-d7166",
	storageBucket: "simple-notification-d7166.appspot.com",
	messagingSenderId: "307076562027"
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
