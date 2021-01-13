import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkingSpacesPage } from './working-spaces.page';

const routes: Routes = [
  {
    path: '',
    component: WorkingSpacesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkingSpacesPageRoutingModule {}
