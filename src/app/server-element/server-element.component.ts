import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None //This is to disable the default encapsulation of Angular.
})
export class ServerElementComponent {
  @Input('serverElement') element: {
    type: string;
    name: string;
    content: string;
  };
}
