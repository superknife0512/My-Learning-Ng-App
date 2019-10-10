import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDisplay: boolean = false;
  clickArray: Array<number> = [];
  increment = 0;

  constructor(){}

  onDisplayDetail(): void {
    this.isDisplay = !this.isDisplay;
    this.increment++;
    this.clickArray.push(this.increment);
  }

}
