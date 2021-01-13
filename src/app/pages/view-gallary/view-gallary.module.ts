import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewGallaryPageRoutingModule } from './view-gallary-routing.module';

import { ViewGallaryPage } from './view-gallary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewGallaryPageRoutingModule
  ],
  declarations: [ViewGallaryPage]
})
export class ViewGallaryPageModule {}
