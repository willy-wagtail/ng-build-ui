import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepComponent } from './step/step.component';

type Step = 1 | 2 | 3 | 4;

@Component({
  selector: 'app-multistep-wizard',
  standalone: true,
  imports: [CommonModule, StepComponent],
  templateUrl: './multistep-wizard.component.html',
  styleUrls: ['./multistep-wizard.component.scss'],
})
export class MultistepWizardComponent {
  currentStep: Step = 1;

  continue() {
    if (this.currentStep <= 4) {
      this.currentStep++;
    }
  }

  back() {
    if (this.currentStep >= 2) {
      this.currentStep--;
    }
  }
}
