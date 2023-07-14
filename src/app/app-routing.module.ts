import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultistepWizardComponent } from './multistep-wizard/multistep-wizard.component';
import { ContentsComponent } from './contents/contents.component';

const routes: Routes = [
  {
    path: 'multistep-wizard',
    component: MultistepWizardComponent,
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
