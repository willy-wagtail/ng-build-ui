import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultistepWizardComponent } from './multistep-wizard.component';

describe('MultistepWizardComponent', () => {
  let component: MultistepWizardComponent;
  let fixture: ComponentFixture<MultistepWizardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MultistepWizardComponent]
    });
    fixture = TestBed.createComponent(MultistepWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
