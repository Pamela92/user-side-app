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
  selector: 'app-user-landing',
  templateUrl: './user-landing.page.html',
  styleUrls: ['./user-landing.page.scss'],
})
export class UserLandingPage implements OnInit {
  db =firebase.firestore();
  bookings:any[]=[];
  bookingsHistory:any[]=[]
  spacesArray:any[]=[];
  newBookArray:any[]=[];
  oldBookArray:any[]=[];
  oldBookNum:any=0;
  newBookNum:any=0;
  spacesNum:any=0;
  constructor(private route:ActivatedRoute,public ownerservice:OwnerServiceService,public account:SignInSignUpService) { 
  console.log(this.account.getUserSession())
    this.db.collectionGroup('reservation').where('profiles_uid','==',this.account.getUserSession()).where("read","==",false).orderBy("date").
    get()
    .then(snap => {
      snap.forEach(dat=>{
        this.bookings.push( Object.assign(dat.data(),{'reservationuid':dat.id}) )
      })
    })
    this.space();
    this. newReservations();
    this.oldBookings();
  }
   

  space(){
    this.db.collectionGroup('space').where('uid','==',this.account.getUserSession()).
    get()
    .then(snap => {
      snap.forEach(dat=>{
        this.spacesArray.push( Object.assign(dat.data(),{'reservationuid':dat.id}) )
        this.spacesNum=this.spacesArray.length;
        console.log(this.spacesArray.length)
      })
    })
  }
  newReservations(){
    this.db.collectionGroup('reservation').where('profiles_uid','==',this.account.getUserSession()).where("read","==",false).orderBy("date").
    get()
    .then(snap => {
      snap.forEach(dat=>{
        this.newBookArray.push( Object.assign(dat.data(),{'reservationuid':dat.id}) );
        this.newBookNum=this.newBookArray.length
      })
    })

  }


  history(){
    this.db.collectionGroup('reservation').where('user_uid','==',this.account.getUserSession()).where("read","==",true).orderBy("date").
    get()
    .then(snap => {
      snap.forEach(dat=>{
        this.bookingsHistory.push( Object.assign(dat.data(),{'reservationuid':dat.id}) )
      })
    })
  }
  oldBookings(){
    this.db.collectionGroup('reservation').where('user_uid','==',this.account.getUserSession()).where("read","==",true).orderBy("date").
    get()
    .then(snap => {
      snap.forEach(dat=>{
        this.oldBookArray.push( Object.assign(dat.data(),{'reservationuid':dat.id}) )
        this.oldBookNum = this.oldBookArray.length;
      })
    })
  }

  ngOnInit() {
  } 

}
