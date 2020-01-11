/**
*Ionic 4 Taxi Booking Complete App (https://store.enappd.com/product/taxi-booking-complete-dashboard)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { ModalController, MenuController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { RideInfoService } from '../ride-info.service';
let RideHistoryPage = class RideHistoryPage {
    constructor(afs, modalController, menu, rideInfoService) {
        this.afs = afs;
        this.modalController = modalController;
        this.menu = menu;
        this.rideInfoService = rideInfoService;
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this.loader) {
                this.loader = yield this.rideInfoService.loading('Loading history ...');
                this.loader.present();
            }
            this.afs
                .collection('completedRides')
                .valueChanges()
                .subscribe(res => {
                this.rides = res;
                this.loader.dismiss();
            });
        });
    }
    ionViewDidEnter() {
        this.menu.enable(true, 'start');
        this.menu.enable(true, 'end');
    }
    showInfo(ride) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: ModalPage,
                componentProps: { rideInfo: ride }
            });
            return yield modal.present();
        });
    }
};
RideHistoryPage = tslib_1.__decorate([
    Component({
        selector: 'app-ride-history',
        templateUrl: './ride-history.page.html',
        styleUrls: ['./ride-history.page.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFirestore,
        ModalController,
        MenuController,
        RideInfoService])
], RideHistoryPage);
export { RideHistoryPage };
//# sourceMappingURL=ride-history.page.js.map