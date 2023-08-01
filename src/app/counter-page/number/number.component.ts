import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumberComponent implements OnChanges {
  @Input() number = 0;
  @Input() place = 0;
  @Input() count = 0;
  @Input() proportional = true;

  height = 24;

  transformStyle = `translateY(${this.getTranslateY()}px)`;

  ngOnChanges(changes: SimpleChanges): void {
    this.transformStyle = `translateY(${this.getTranslateY()}px)`;
  }

  getTranslateY() {
    let proportionalPlaceValue = (this.count / this.place) % 10;
    let flooredPlaceValue = Math.floor(proportionalPlaceValue);

    let placeValue = this.proportional
      ? proportionalPlaceValue
      : flooredPlaceValue;

    let offset = (10 + this.number - placeValue) % 10;
    let offsetPixels = offset * this.height;

    if (offset > 5) {
      offsetPixels -= 10 * this.height;
    }

    return offsetPixels;
  }
}
