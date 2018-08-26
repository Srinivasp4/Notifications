import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';

@Component({
    selector: 'app-root',
    templateUrl:'app.component.html'
})
export class AppComponent {

/**
    readonly VAPID_PUBLIC_KEY = "BECWJSclRltHvHnrINCSyQDfuq4c-Go5f3DAPnhNSOeO8__tMUh1KHQiEBSFvVk3XL3ZNFN56P_uTIOIZZ7_aW0";

    constructor(
        private swPush: SwPush) {}

    subscribeToNotifications() {

        this.swPush.requestSubscription({
            serverPublicKey: this.VAPID_PUBLIC_KEY
        })
        .then(sub => console.log('sucess : ' + JSON.stringify(sub)))
        .catch(err => console.error("Could not subscribe to notifications", err));
    }

    */
}

