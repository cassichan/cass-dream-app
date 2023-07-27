import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-server-control',
  templateUrl: './server-control.component.html',
  styleUrls: ['./server-control.component.css'],
})
export class ServerControlComponent {
  //serverCreated and blueprintCreated are events, which are emitted from server-control component.
  @Output('sCreated') serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>(); //generic type
  @Output() blueprintCreated = new EventEmitter<{
    blueprintName: string;
    blueprintContent: string;
  }>();
  newServerName = '';
  newServerContent = '';
  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }
  onAddBlueprint() {
    this.blueprintCreated.emit({
      blueprintName: this.newServerName,
      blueprintContent: this.newServerContent,
    });
  }
}
