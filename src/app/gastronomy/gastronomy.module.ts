import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GastronomyPageRoutingModule } from './gastronomy-routing.module';

import { GastronomyPage } from './gastronomy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GastronomyPageRoutingModule
  ],
  declarations: [GastronomyPage]
})
export class GastronomyPageModule {}
