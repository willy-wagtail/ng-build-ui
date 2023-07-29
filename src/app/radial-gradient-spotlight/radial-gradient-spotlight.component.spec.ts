import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadialGradientSpotlightComponent } from './radial-gradient-spotlight.component';

describe('RadialGradientSpotlightComponent', () => {
  let component: RadialGradientSpotlightComponent;
  let fixture: ComponentFixture<RadialGradientSpotlightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RadialGradientSpotlightComponent]
    });
    fixture = TestBed.createComponent(RadialGradientSpotlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
