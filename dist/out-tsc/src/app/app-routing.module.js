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
import { RouterModule } from '@angular/router';
const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
    { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersPageModule) },
    { path: 'drivers', loadChildren: () => import('./drivers/drivers.module').then(m => m.DriversPageModule) },
    { path: 'ride-history', loadChildren: () => import('./ride-history/ride-history.module').then(m => m.RideHistoryPageModule) },
    { path: 'modal', loadChildren: () => import('./modal/modal.module').then(m => m.ModalPageModule) },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map