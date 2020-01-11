/**
*Ionic 4 Taxi Booking Complete App (https://store.enappd.com/product/taxi-booking-complete-dashboard)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from 'angularfire2/firestore';
import { LoadingController } from '@ionic/angular';
let RideInfoService = class RideInfoService {
    constructor(http, afs, loadingCtrl) {
        this.http = http;
        this.afs = afs;
        this.loadingCtrl = loadingCtrl;
        this.key = 'AIzaSyD4QJQn8taKoIjDovIggk1B7HQ7H6NEF8w';
    }
    getOrigin(rideInfo) {
        return new Promise(resolve => {
            this.http
                .get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${rideInfo.origin.lat}, ${rideInfo.origin.lng}&key=${this.key}`)
                .subscribe(res => {
                resolve(res);
            });
        });
    }
    getDestination(rideInfo) {
        return new Promise(resolve => {
            this.http
                .get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${rideInfo.destination.lat}, ${rideInfo.destination.lng}&key=${this.key}`)
                .subscribe(res => {
                resolve(res);
            });
        });
    }
    getDriver(rideInfo) {
        return new Promise(resolve => {
            this.afs
                .collection('drivers')
                .doc(rideInfo.driver)
                .get()
                .subscribe(doc => {
                resolve(doc.data());
            });
        });
    }
    getCustomer(rideInfo) {
        return new Promise(resolve => {
            this.afs
                .collection('customers')
                .doc(rideInfo.customer)
                .get()
                .subscribe(doc => {
                resolve(doc.data());
            });
        });
    }
    loading(message) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const loader = yield this.loadingCtrl.create({
                message
            });
            return loader;
        });
    }
};
RideInfoService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient,
        AngularFirestore,
        LoadingController])
], RideInfoService);
export { RideInfoService };
//# sourceMappingURL=ride-info.service.js.map