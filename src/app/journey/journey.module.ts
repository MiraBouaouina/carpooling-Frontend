/**
  * Car Pool starter (https://store.enappd.com/product/blablacar-cloneionic-4-car-pooling-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { JourneyPage } from './journey.page';
import { ShareableModule } from '../shareable/shareable.module';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { AgmOverlays } from 'agm-overlays';

const routes: Routes = [
  {
    path: '',
    component: JourneyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgmCoreModule,
    AgmDirectionModule,
    AgmOverlays,
    ShareableModule,
    RouterModule.forChild(routes)
  ],
  declarations: [JourneyPage]
})
export class JourneyPageModule { }
