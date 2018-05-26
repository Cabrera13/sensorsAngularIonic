import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion';
import {Platform} from 'ionic-angular';

/**
 * Generated class for the AccelerometerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-accelerometer',
  templateUrl: 'accelerometer.html',
})
export class AccelerometerPage {
  subscription : any; 
  x = 0.0;
  y = 0.0;
  constructor(private platform: Platform, private deviceMotion: DeviceMotion, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // Watch device acceleration

    this.subscription = this.deviceMotion.watchAcceleration({frequency:100}).subscribe((acceleration: DeviceMotionAccelerationData) => {
      console.log("acc"+acceleration);
      
      if (acceleration.x.valueOf() > 1){
        this.x = this.x + acceleration.x.valueOf() * 3;
        if (this.x >= window.innerWidth-50){
          this.x = window.innerWidth-49;
      
        }
        if  (this.x < 0){
          this.x = 0;
        }
        document.getElementById("ball").style.left = this.x.toString()+"px";

      }
 
      if (acceleration.y.valueOf() > 1) {
        this.y += acceleration.y.valueOf() * 3;

        if (this.y >= window.innerHeight-50){
          this.y =  window.innerHeight-49;
        }
        if  (this.y < 0){
          this.y = 0;
        }
        document.getElementById("ball").style.top = this.y.toString()+"px";
      }
 
    });
    
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
