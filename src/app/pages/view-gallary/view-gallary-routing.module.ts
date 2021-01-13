import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewGallaryPage } from './view-gallary.page';

const routes: Routes = [
  {
    path: '',
    component: ViewGallaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewGallaryPageRoutingModule {}
