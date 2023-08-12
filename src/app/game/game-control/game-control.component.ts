import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  @Output() intervalFired = new EventEmitter<number>();
  @Input() interval;
  count = 1;

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.count++);
      console.log(`count: ${this.count}`);
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.interval);
  }
}
