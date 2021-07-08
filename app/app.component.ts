import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: /* html */ `
    <div class="app">
      <button (click)="handleClick(username.value)">
        Get value
      </button>
      <input
        type="text" #username
      >
      <div>{{ name }}</div>
    </div>
  `
})
export class AppComponent {
  name: string = 'Jeff';
  handleClick(value: string) {
    console.log(value);
    this.name = value;
  }
}
