import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {  ReactiveFormsModule } from '@angular/forms';
import { ViewSpacePageRoutingModule } from './view-space-routing.module';

import { ViewSpacePage } from './view-space.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ViewSpacePageRoutingModule
  ],
  declarations: [ViewSpacePage]
})
export class ViewSpacePageModule {}
