import { Component } from '@angular/core';
import { UserService } from '@ng-test/shared/data/user';

@Component({
  selector: 'ng-test-client-app-entry',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class RemoteEntryComponent {
  username = '';
  password = '';
  isLoggedIn$ = this.userService.isUserLoggedIn$;
  constructor(private userService: UserService) {}
  login() {
    this.userService.checkCredentials(this.username, this.password);
  }
}