import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  detailsVisible = false;
  buttonClicks = [];

  toggleDetailsAndCountClicks() {
    this.addButtonClicks();
    this.displayDetails();
  }

  displayDetails() {
    this.detailsVisible = !this.detailsVisible;
  }

  addButtonClicks() {
    // this.buttonClicks.push(this.buttonClicks.length + 1);
    this.buttonClicks.push(new Date());
  }
}
