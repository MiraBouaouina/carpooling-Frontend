/**
  * Car Pool starter (https://store.enappd.com/product/blablacar-cloneionic-4-car-pooling-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapDirectionComponent } from '../map-direction/map-direction.component';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { AgmOverlays } from 'agm-overlays';
import { ChatlistComponent } from '../chatlist/chatlist.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [MapDirectionComponent, ChatlistComponent],
  imports: [
    CommonModule,
    AgmCoreModule,
    AgmDirectionModule,
    AgmOverlays,
    IonicModule
  ],
  exports: [MapDirectionComponent, ChatlistComponent]
})
export class ShareableModule { }
