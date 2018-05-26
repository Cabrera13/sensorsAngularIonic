import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DeviceOrientation, DeviceOrientationCompassHeading } from '@ionic-native/device-orientation';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  data : any;
  magneticHeading : any;
  subscription : any;

  constructor(private deviceOrientation: DeviceOrientation) {

  }

  ngOnInit () {
    this.deviceOrientation.getCurrentHeading().then(
      (data: DeviceOrientationCompassHeading) => console.log(data),
      (error: any) => console.log(error)
    );
    this.subscription = this.deviceOrientation.watchHeading().subscribe(
      (data: DeviceOrientationCompassHeading) => {console.log(this.magneticHeading); this.data = data; this.magneticHeading = -data.magneticHeading}
    )
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
