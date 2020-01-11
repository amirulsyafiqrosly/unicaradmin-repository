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
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
let LoginPage = class LoginPage {
    constructor(menu, route) {
        this.menu = menu;
        this.route = route;
    }
    ngOnInit() { }
    ionViewDidEnter() {
        this.menu.enable(false, 'start');
        this.menu.enable(false, 'end');
    }
    login() {
        console.log(`Email: ${this.email} and Password: ${this.password}`);
        this.route.navigate(['/ride-history']);
    }
};
LoginPage = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.page.html',
        styleUrls: ['./login.page.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [MenuController, Router])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.page.js.map