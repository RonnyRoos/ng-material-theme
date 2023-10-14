import {Component, inject} from '@angular/core';
import {UserAgentService} from "./core/user-agent.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-material-theme';
  userAgentService: UserAgentService;
  constructor(userAgentService: UserAgentService) {
    this.userAgentService = userAgentService;
  }

}
