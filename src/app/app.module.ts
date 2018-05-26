import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { DeviceOrientation } from '@ionic-native/device-orientation'
import { Geolocation } from '@ionic-native/geolocation';
import { MapPage } from '../pages/map/map';
import { CameraPage } from '../pages/camera/camera';
import { AccelerometerPage } from '../pages/accelerometer/accelerometer';
import { DeviceMotion } from '@ionic-native/device-motion';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage, 
    MapPage, 
    CameraPage, 
    AccelerometerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MapPage,
    CameraPage,
    AccelerometerPage
  ],
  providers: [
    StatusBar,
    Camera,
    SplashScreen,
    DeviceOrientation,
    Geolocation,
    DeviceMotion,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
