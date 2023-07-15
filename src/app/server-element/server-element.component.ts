import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent {
  //Assign an alias to the input property to be used outside this component
  @Input('serverElement') element: { type: string; name: string; content: string };
}
