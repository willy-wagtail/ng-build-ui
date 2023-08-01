import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.scss'],
})
export class CounterPageComponent {
  count = 0;
  snapDigits = true;

  setCount(event: Event) {
    if (!(event.target instanceof HTMLInputElement)) {
      return;
    }

    this.count = +event.target.value;
  }
}
