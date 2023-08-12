import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  //GameControl code
  oddGames: number[] = [];
  evenGames: number[] = [];

  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 === 0) {
      this.evenGames.push(firedNumber);
    } else {
      this.oddGames.push(firedNumber);
    }
  }

  //Servers code
  // serverElements = [
  //   { type: 'server', name: 'Test-server', content: 'Just a test!' },
  // ];

  // onServerAdded(serverData: { serverName: string; serverContent: string }) {
  //   this.serverElements.push({
  //     type: 'server',
  //     name: serverData.serverName,
  //     content: serverData.serverContent,
  //   });
  // }

  // onBlueprintAdded(blueprintData: {
  //   serverName: string;
  //   serverContent: string;
  // }) {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: blueprintData.serverName,
  //     content: blueprintData.serverContent,
  //   });
  // }

  // onChangeFirst() {
  //   this.serverElements[0].name = 'Changed name!';
  // }

  // onDestroyFirst() {
  //   this.serverElements.splice(0, 1);
  // }
}
