import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepComponent } from './step/step.component';

@Component({
  selector: 'app-multistep-wizard',
  standalone: true,
  imports: [CommonModule, StepComponent],
  templateUrl: './multistep-wizard.component.html',
  styleUrls: ['./multistep-wizard.component.scss'],
})
export class MultistepWizardComponent {
  currentStep: number = 1;

  continue() {
    if (this.currentStep < 5) {
      this.currentStep++;
    }
  }

  back() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  isCompleted() {
    return this.currentStep > 4;
  }
}
