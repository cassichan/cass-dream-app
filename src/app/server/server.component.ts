import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  // : type is not required due to type inference
  serverId: number = 10;
  serverStatus: string = 'offline';
  getServerStatus() {
    return this.serverStatus;
  }
}
