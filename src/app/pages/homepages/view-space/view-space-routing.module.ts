import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewSpacePage } from './view-space.page';

const routes: Routes = [
  {
    path: '',
    component: ViewSpacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewSpacePageRoutingModule {}
