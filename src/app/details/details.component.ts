import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: [
    `
      .specialItem {
        color: white;
      }
    `,
  ],
})
export class DetailsComponent {
  detailsVisible = false;
  buttonClicks = [];
  clickNumber = 0;

  clickButton() {
    this.addButtonClicks();
    this.displayDetails();
    this.clickNumber += 1;
  }

  displayDetails() {
    this.detailsVisible = !this.detailsVisible;
  }

  addButtonClicks() {
    this.buttonClicks.push(this.buttonClicks.length + 1);
    this.clickNumber += 1;
  }
}
