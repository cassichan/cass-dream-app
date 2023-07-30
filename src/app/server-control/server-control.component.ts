import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-server-control',
  templateUrl: './server-control.component.html',
  styleUrls: ['./server-control.component.css'],
})
export class ServerControlComponent {
 @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  newServerContent = '';
  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent,
    });
    console.log(nameInput);
  }
  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent,
    });
  }
}
