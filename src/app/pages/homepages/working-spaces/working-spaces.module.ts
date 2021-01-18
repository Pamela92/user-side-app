import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WorkingSpacesPageRoutingModule } from './working-spaces-routing.module';
import { WorkingSpacesPage } from './working-spaces.page';




import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkingSpacesPageRoutingModule,AgmCoreModule,RouterModule,
  
  ],
  declarations: [WorkingSpacesPage]
})
export class WorkingSpacesPageModule {}
