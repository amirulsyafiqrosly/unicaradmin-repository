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
import { map } from 'rxjs/operators';
let DriversPage = class DriversPage {
    constructor(afs) {
        this.afs = afs;
        this.filterDrivers = [];
        this.getData();
    }
    getData() {
        this.afs
            .collection('drivers')
            .snapshotChanges()
            .pipe(map(response => {
            return response.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }))
            .subscribe(docs => {
            this.drivers = docs;
        });
    }
    ngOnInit() { }
    segmentChanged(ev) {
        this.filterDrivers = [];
        const checkAppr = ev.detail.value;
        this.drivers.forEach(driver => {
            if (driver.approved.toString() === checkAppr) {
                this.filterDrivers.push(driver);
            }
        });
    }
    toggleChanged(ev, driverId) {
        const check = ev.detail.checked;
        this.afs
            .collection('drivers')
            .doc(driverId)
            .update({
            approved: check
        })
            .then(() => {
            this.filterDrivers = [];
        });
    }
};
DriversPage = tslib_1.__decorate([
    Component({
        selector: 'app-drivers',
        templateUrl: './drivers.page.html',
        styleUrls: ['./drivers.page.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFirestore])
], DriversPage);
export { DriversPage };
//# sourceMappingURL=drivers.page.js.map