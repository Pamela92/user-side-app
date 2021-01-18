import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  coords: any;
  address: any;
  constructor(private nativeGeocoder: NativeGeocoder) { }
  async locate() {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current', coordinates);
    this.coords = coordinates.coords;
    this.getDistanceFromLatLonInKm(this.coords.latitude,this.coords.longitude,"-26.250225099999998","27.8574123")
  
  }
  async reverseGeocode() {
    if (!this.coords) {
      const coordinates = await Geolocation.getCurrentPosition();  // getting user's location
      this.coords = coordinates.coords;
    }
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
    // function that convert user's location(long and lat)
    this.nativeGeocoder.reverseGeocode(this.coords.latitude, this.coords.longitude, options) 
      .then((result: NativeGeocoderResult[]) => {
        console.log(result);
        this.address = result[0];
      })
      .catch((error: any) => console.log(error));
  }

   getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
    var dLon = this.deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    console.log(d)
    return d;
  }
  
  deg2rad(deg) {
    return deg * (Math.PI/180)
  }








}
