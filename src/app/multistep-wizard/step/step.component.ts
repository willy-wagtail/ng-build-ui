import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckIconComponent } from './check-icon/check-icon.component';

@Component({
  selector: 'app-step',
  standalone: true,
  imports: [CommonModule, CheckIconComponent],
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepComponent {
  @Input({ required: true }) step!: number;
  @Input({ required: true }) currentStep!: number;

  private _status = 'inactive';

  ngOnChanges() {
    this.updateStatus();
  }

  get status() {
    return this._status;
  }

  private updateStatus() {
    if (this.currentStep === this.step) {
      return (this._status = 'active');
    } else if (this.currentStep < this.step) {
      return (this._status = 'inactive');
    } else {
      return (this._status = 'complete');
    }
  }
}
