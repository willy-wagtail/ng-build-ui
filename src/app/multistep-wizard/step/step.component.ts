import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  OnChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckIconComponent } from '../check-icon/check-icon.component';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

type StepStatus = 'inactive' | 'active' | 'complete';

const statusColoursAnimation = trigger('statusColours', [
  state(
    'inactive',
    style({
      backgroundColor: 'var(--color-white)',
      borderColor: 'var(--color-slate-200)',
      color: 'var(--color-slate-400)',
    })
  ),
  state(
    'active',
    style({
      backgroundColor: 'var(--color-white)',
      borderColor: 'var(--color-blue-500)',
      color: 'var(--color-blue-500)',
    })
  ),
  state(
    'complete',
    style({
      backgroundColor: 'var(--color-blue-500)',
      borderColor: 'var(--color-blue-500)',
      color: 'var(--color-blue-500)',
    })
  ),
  transition('* => *', [animate('0.2s')]),
]);

const circleGlowAnimation = trigger('circleGlow', [
  state('active', style({ scale: 1 })),
  state('complete', style({ scale: 1.3 })),
  transition('active => complete', [
    /** Ease-out-circ @see @link https://easings.net/#easeOutCirc */
    animate('0.6s 0.2s cubic-bezier(0, 0.55, 0.45, 1)'),
  ]),
  transition('complete => active', [animate('0.2s')]),
]);

@Component({
  selector: 'app-step',
  standalone: true,
  imports: [CommonModule, CheckIconComponent],
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [statusColoursAnimation, circleGlowAnimation],
})
export class StepComponent implements OnChanges, AfterViewInit {
  @Input({ required: true }) step!: number;
  @Input({ required: true }) currentStep!: number;

  @HostBinding('@.disabled') animationsDisabled = true;

  status: StepStatus = 'inactive';

  ngOnChanges() {
    this.updateStatus();
  }

  ngAfterViewInit() {
    this.animationsDisabled = false;
  }

  private updateStatus() {
    if (this.currentStep > this.step) {
      this.status = 'complete';
    } else if (this.currentStep === this.step) {
      this.status = 'active';
    } else {
      this.status = 'inactive';
    }
  }
}
