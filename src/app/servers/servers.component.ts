import { Component } from '@angular/core';

@Component({
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test server';
  userName = 'Test username';
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus =
      'Server was created!' + 'Name is:' + this.serverName;
      this.serverCreated = true;
  }
  onUpdateServerName(event: any) {
    console.log(event);
    this.serverName = event.target.value;
  }

  resetUsername() {
    this.userName = '';
  }
}
