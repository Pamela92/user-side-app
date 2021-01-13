import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import { Router, ActivatedRoute } from '@angular/router';
import 'firebase/firestore';
import 'firebase/auth';
import { IonInfiniteScroll } from '@ionic/angular';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { OwnerServiceService } from 'src/app/services/owner.service';
import { SignInSignUpService } from 'src/app/sign-in-sign-up.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.page.html',
  styleUrls: ['./booking-history.page.scss'],
})
export class BookingHistoryPage implements OnInit {


  db =firebase.firestore();
  user_uid = this.route.snapshot.params.useruid;
  reservationuid = this.route.snapshot.params.reservuid;
  profilesuid = this.route.snapshot.params.profilesuid;
  profile_uid = this.route.snapshot.params.profileuid;
  space_uid = this.route.snapshot.params.spaceuid;
  checkin: any;
  checkout: any;
  timein: any;
  timeout: any;
  extras :any= [];
  spaceBooked:any=[];
  userprofile :any= [];
  date: any;
  company_name: any;
  img_profile: any;
  company_emaile: any;
  company_tel: any;
  available: any;
  categories: any;
  image: any;
  category_number: any;
  price: any;
  address: any;
  city: any;
  province: any;
  amenities:any=[]
  read: boolean;

  constructor(private route:ActivatedRoute,public ownerservice:OwnerServiceService,public account:SignInSignUpService) { 
    console.log(this.user_uid)
    this.db.collectionGroup('profile').where("uid","==",this.profilesuid)
    .get()
    .then(snap => {
      snap.forEach(dat=>{
        console.log(">>>>>"+ dat.data())
        this.userprofile.push(dat.data())
      })
    })
  
  
  
    console.log(this.reservationuid)
    this.db.collection("profiles").doc(this.profilesuid)
           .collection("profile").doc(this.profile_uid)
           .collection("space").doc(this.space_uid)
           .collection('reservation').doc(this.reservationuid)
  
    .get() 
    .then(snap => {
  console.log(snap.data())
  this.checkin=snap.data().checkin;
  this.checkout=snap.data().checkout;
  this.timein=snap.data().timein;
  this.timeout=snap.data().timeout;
  this.date=snap.data().date;
  this.available=snap.data().availabe;
  this.extras= Object.values(snap.data().extras )
  this.read=snap.data().read;


  
  

    })
  }

  ngOnInit() {
    this.getSpace();

  }


  getSpace(){
    this.db.collection("profiles").doc(this.profilesuid)
    .collection("profile").doc(this.profile_uid)
    .collection("space").doc(this.space_uid)
   
    .get()
    .then(snap => {
   
        console.log("+++"+ snap.data())
        this.categories = snap.data().categories;
        this.image = snap.data().image;
        this.category_number = snap.data().category_number;
        this.price = snap.data().price;
        this.address = snap.data().address;
        this.city = snap.data().city;
        this.province = snap.data().province;
        this.amenities .push(snap.data().amenities) ;
        

        
        
    })
  }


}
