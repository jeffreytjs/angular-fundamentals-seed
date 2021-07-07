import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      {{ title + '!' }}
      <div class="app">
        {{ numberOne + numberTwo }}
      </div>
      <div class="app">
        {{ isHappy ? ':)' : ':(' }}
    </div>
    </div>
  `
})
export class AppComponent {
  title: string;
  isHappy: boolean = false;
  numberOne: number = 1;
  numberTwo: number = 2;
  constructor() {
    this.title = 'Ultimate Angular'
  }
}
