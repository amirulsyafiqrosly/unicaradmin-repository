
/**
*Ionic 4 Taxi Booking Complete App (https://store.enappd.com/product/taxi-booking-complete-dashboard)
*
* Copyright © 2019-present Enappd. All rights reserved.
*
* This source code is licensed as per the terms found in the
* LICENSE.md file in the root directory of this source tree.
*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from 'angularfire2/firestore';
import { LoadingController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class RideInfoService {
  private key = 'AIzaSyD4QJQn8taKoIjDovIggk1B7HQ7H6NEF8w';
  constructor(private http: HttpClient,
    private afs: AngularFirestore,
    public loadingCtrl: LoadingController) {}

  getOrigin(rideInfo) {
    return new Promise(resolve => {
      this.http
        .get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${
          rideInfo.origin.lat
          }, ${rideInfo.origin.lng}&key=${this.key}`
        )
        .subscribe(res => {
          resolve(res);
        });
    });
  }

  getDestination(rideInfo) {
    return new Promise(resolve => {
      this.http
        .get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${
          rideInfo.destination.lat
          }, ${rideInfo.destination.lng}&key=${this.key}`
        )
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

  async loading(message) {
    const loader = await this.loadingCtrl.create({
      message
    });
    return loader;
  }
}
