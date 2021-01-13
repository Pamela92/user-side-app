import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavouriteSpacePageRoutingModule } from './favourite-space-routing.module';
import {  ReactiveFormsModule } from '@angular/forms';
import { FavouriteSpacePage } from './favourite-space.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FavouriteSpacePageRoutingModule
  ],
  declarations: [FavouriteSpacePage]
})
export class FavouriteSpacePageModule {}
