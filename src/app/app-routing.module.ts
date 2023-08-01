import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultistepWizardComponent } from './multistep-wizard/multistep-wizard.component';
import { ContentsComponent } from './contents/contents.component';
import { RadialGradientSpotlightComponent } from './radial-gradient-spotlight/radial-gradient-spotlight.component';
import { CounterComponent } from './counter-page/counter/counter.component';
import { CounterPageComponent } from './counter-page/counter-page.component';

const routes: Routes = [
  {
    path: 'multistep-wizard',
    component: MultistepWizardComponent,
  },
  {
    path: 'radial-gradient-spotlight',
    component: RadialGradientSpotlightComponent,
  },
  {
    path: 'animated-counter',
    component: CounterPageComponent,
  },
  {
    path: '',
    component: ContentsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
