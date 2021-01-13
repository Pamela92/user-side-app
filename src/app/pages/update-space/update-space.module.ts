import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateSpacePageRoutingModule } from './update-space-routing.module';

import { UpdateSpacePage } from './update-space.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateSpacePageRoutingModule
  ],
  declarations: [UpdateSpacePage]
})
export class UpdateSpacePageModule {}
