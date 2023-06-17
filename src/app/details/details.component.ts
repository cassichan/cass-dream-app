import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  detailsVisible = false;
  buttonClicks = [];
  totalButtonClicks = 0;

  clickButton() {
    this.addButtonClicks();
    this.displayDetails();
  }

  displayDetails() {
    this.detailsVisible = !this.detailsVisible;
  }

  addButtonClicks() {
    this.buttonClicks.push(this.buttonClicks.length + 1);
    console.log(this.buttonClicks);
    for (let i = 0; i < this.buttonClicks.length; i++) {
      this.totalButtonClicks = +this.buttonClicks[i];
    }
    return this.totalButtonClicks;
  }
}
