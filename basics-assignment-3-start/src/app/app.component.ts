import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .bigNumber {
    color: white;
  }`]
})
export class AppComponent {
  displaySecretPassword:boolean = false;
  clicks = [];
  logEntryNumber = 0;

  onDisplayDetails() {
    this.displaySecretPassword = !this.displaySecretPassword;
    this.logEntryNumber ++;
    this.clicks.push(new Date);
  }

  iDontCare() {
    return true;
  }
  getColor(entryNumber) {
      return entryNumber >= 4 ? 'blue': 'none';
  }
}
