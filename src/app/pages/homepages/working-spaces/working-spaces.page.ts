import { Component, NgZone, OnInit } from '@angular/core';

import firebase from 'firebase/app';
import { Router, ActivatedRoute } from '@angular/router';
import 'firebase/firestore';
import 'firebase/auth';
import { IonInfiniteScroll } from '@ionic/angular';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { OwnerServiceService } from 'src/app/services/owner.service';
import { SignInSignUpService } from 'src/app/sign-in-sign-up.service';
import { UserService } from 'src/app/services/user.service';




import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { Observable } from 'rxjs/internal/Observable';


///Search
export enum SearchType{
  all = '',
  privateoffice = 'private office',
  boardroom='boardroom'
}

@Component({
  selector: 'app-working-spaces',
  templateUrl: './working-spaces.page.html',
  styleUrls: ['./working-spaces.page.scss'],
})
export class WorkingSpacesPage implements OnInit {
  workingSpaces:any[]=[];
 
  userprofileuid: string;


  coords: any;
  address: any;
  distance: number;
  latitude: any;
  longitude: any;

  public lat: any;
  public lng: any;
  showingCurrent: boolean = true;
  showMap: number=0;


 //search
 searchTerm:string='';
 results:Observable<any>;
 searchedSpaces:any=[]
  type: SearchType;
  searchedSpacesValue: number=-1;

  constructor(private router: Router, private ngZone: NgZone,private nativeGeocoder: NativeGeocoder,public userservice :UserService,private route:ActivatedRoute,public ownerservice:OwnerServiceService,public account:SignInSignUpService) { 
  this.locate()
  if(this.account.getUserSession()!='undefined'){
    
  }
  




    firebase.firestore().collectionGroup("space")
    
    .get()
    .then(snap => {
      snap.forEach(dat=>{
        this.workingSpaces.push( Object.assign(dat.data(),{'spaceId':dat.id}) )
      
      })
    })

  }

  ngOnInit() {
  
  }
 




  addToFavourites(profilesuid ,profileuid,spaceuid,namespace,price){
  console.log(spaceuid)
  
   this.userservice.favourite(profilesuid,this.account.getUserSession(),this.account.getUserProfileUid(), profileuid, spaceuid,namespace,price) 
  }
  
  
  getFavouritesuid(){
    firebase.firestore().collection("profiles")
    .doc(this.account.getUserSession())
    .collection("user-profile").doc("25NNJ05mquUnaA7N9mgA").get().then(doc=>{
      // doc.forEach(favUid=>{
        
        this.userprofileuid= doc.id; 
        console.log("We are here 3:"+ doc.id)
      // })
    })
  }
  /////////Calculating the distances between users and spaces////////
  async locate() {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current', coordinates);
    this.coords = coordinates.coords;
    this.latitude = this.coords.latitude;
    this.longitude= this.coords.longitude;
   // this.getDistanceFromLatLonInKm(this.coords.latitude,this.coords.longitude,"-26.250225099999998","27.8574123")
  }
  getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
    var dLon = this.deg2rad(lon2-lon1);  
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
   this.distance = Math.round(d);
    // return d;
  }
  deg2rad(deg) {
    return deg * (Math.PI/180)
  }
////////////////////Ends Here////////////////////
///////////////////Google maps//////////////////
async setCurrentPosition(lat,lng) {
  this.showMap = 1;
  const coordinates = await Geolocation.getCurrentPosition();
  this.ngZone.run(() => {
    this.lat = lat;
    this.lng = lng;
  })
  this.showingCurrent = true;
}
closeMap(){

  this.showMap = 0;
}
///////////Ends here////////////////////////
  myFunction(){
    return 1
  }


  //search
  searchChanged() {
    
    // Call our service function which returns an Observable
   this.results = this.searchData(this.type);
   console.log(this.results )
   this.searchedSpacesValue=-1
   this.searchedSpaces=[]
  }


  //Searchbar  SearchType
searchData(type: SearchType): Observable<any> {
  
  firebase.firestore().collectionGroup("space").where("categories","==",type)
    
    .get()
    .then(snap => {
      snap.forEach(dat=>{
        console.log(dat.data())
        this.searchedSpaces.push( Object.assign(dat.data(),{'spaceId':dat.id}) )
        this.searchedSpacesValue=this.searchedSpaces-1;
      })
    })

  return this.searchedSpaces
}



logout(){
  this.account.logOut();
  this.userservice.getSpaceuidDestroy()
  this.userservice.getProfuidDestroy()
  this.userservice.getSpaceIdDestroy()
  this.router.navigateByUrl('working-spaces');
}

}


