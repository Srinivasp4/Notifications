import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {PushNotificationComponent} from './app.component.pushnotifactions';
import {PushNotificationsService} from './push.notification.service';

import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  declarations: [
    AppComponent,
    PushNotificationComponent
  ],
  imports: [
  	//BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
    
  ],
  providers: [PushNotificationsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
