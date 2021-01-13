import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateSpacePage } from './update-space.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateSpacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateSpacePageRoutingModule {}
