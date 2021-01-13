import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OwnerLandingPage } from './owner-landing.page';

const routes: Routes = [
  {
    path: '',
    component: OwnerLandingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnerLandingPageRoutingModule {}
