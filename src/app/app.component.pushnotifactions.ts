import { AngularFireDatabase } from 'angularfire2/database';
import { PushNotificationsService } from './push.notification.service';
import {
    Component,
    OnInit,
    EventEmitter,
    Output
} from '@angular/core';



@Component({
    //moduleId: module.id,
    selector: 'push-notification',
    templateUrl: 'app.component.pushnotifications.html'
})
export class PushNotificationComponent implements OnInit {
    title: string = 'Browser Push Notifications!';
    courses: any[];
    constructor(private _notificationService: PushNotificationsService,private db: AngularFireDatabase) {
        this._notificationService.requestPermission();

        this.db.list('/courses')
            .valueChanges()
            .subscribe( courses => {
            this.courses = courses;

            let data: Array < any >= [];
        
        data.push({
            'title': 'Action - Approval Required',
            'alertContent': courses[0]
        });
        
        this._notificationService.generateNotification(data);

            console.log('constructor ' + this.courses);
            
        });

  

    }
    ngOnInit() {

        
    }
    notify() {
        
        

        /**
        let data: Array < any >= [];
        data.push({
            'title': 'Approval',
            'alertContent': 'This is First Alert -- By Debasis Saha'
        });
        data.push({
            'title': 'Request',
            'alertContent': 'This is Second Alert -- By Debasis Saha'
        });
        data.push({
            'title': 'Leave Application',
            'alertContent': 'This is Third Alert -- By Debasis Saha'
        });
        data.push({
            'title': 'Approval',
            'alertContent': 'This is Fourth Alert -- By Debasis Saha'
        });
        data.push({
            'title': 'To Do Task',
            'alertContent': 'This is Fifth Alert -- By Debasis Saha'
        });
        this._notificationService.generateNotification(data);
        */
    }
}
