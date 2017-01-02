import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})
export class AppComponent {
    message: string = 'Hello!'
    users: User[] = [
      { id: 25, name: 'Jay',username: 'yoyojyv' },
      { id: 26, name: 'Jay2',username: 'yoyojyv2' }
    ];
    activeUser;

    selectUser(user) {
      this.activeUser = user;
      console.log(user);
    }

    onUserCreated(event) {
      this.users.push(event.user);
    }
}
