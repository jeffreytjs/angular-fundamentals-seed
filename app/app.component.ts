import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: /* html */ `
    <div class="app">
      <input
        type="text"
        [value]="name"
        (input)="handleChange($event.target.value)"
      >

      <div *ngIf="name.length > 2">
        Searching for... {{ name }}
      </div>

      <template [ngIf]="name.length > 2">
        <div>
          Searching for... {{ name }}
        </div>
      </template>
    </div>
  `
})
export class AppComponent {
  name: string = 'Jeff';
  handleChange(value: string) {
    this.name = value;
  }
}
