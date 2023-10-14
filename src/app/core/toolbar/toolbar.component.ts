import {Component, EventEmitter, inject, Output} from '@angular/core';
import {UserAgentService} from "../user-agent.service";
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Output() sideNavToggleEmitter = new EventEmitter<void>();
  userAgentService: UserAgentService;

  constructor(userAgentService: UserAgentService) {
    this.userAgentService = userAgentService;
  }

  toggleSideNav() {
    console.log('toggle clicked');
    this.sideNavToggleEmitter.emit();
  }
}
