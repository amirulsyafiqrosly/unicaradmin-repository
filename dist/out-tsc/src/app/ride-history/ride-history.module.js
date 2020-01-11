/**
*Ionic 4 Taxi Booking Complete App (https://store.enappd.com/product/taxi-booking-complete-dashboard)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RideHistoryPage } from './ride-history.page';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { ModalPage } from '../modal/modal.page';
const routes = [
    {
        path: '',
        component: RideHistoryPage
    }
];
let RideHistoryPageModule = class RideHistoryPageModule {
};
RideHistoryPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes),
            AgmCoreModule,
            AgmDirectionModule
        ],
        declarations: [RideHistoryPage, ModalPage],
        entryComponents: [ModalPage]
    })
], RideHistoryPageModule);
export { RideHistoryPageModule };
//# sourceMappingURL=ride-history.module.js.map