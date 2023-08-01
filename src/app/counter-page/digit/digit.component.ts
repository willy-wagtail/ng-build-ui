import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-digit',
  templateUrl: './digit.component.html',
  styleUrls: ['./digit.component.scss'],
})
export class DigitComponent {
  @Input() place = 1;
  @Input() count = 0;
  @Input() snapDigits = false;
}
