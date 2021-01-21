import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  spaceuid: any;
  profuid: any;
  spaceId: any;
  workingSpaces: any;

  constructor() { }


  changeCategoryNum(user_uid, uid, numberCategotry) {
    var db = firebase.firestore();
    var hotelsRef = db.collection("profiles");
    hotelsRef.doc(uid).collection("profile").doc(user_uid)
    .set({
      numberCategotry: numberCategotry
     }, { merge: true })
  }

  reservation(profiles_uid, profile_uid, space_uid, user_uid, checkin, checkout, timein, timeout, extras:[], availabe,hoursbooked,indate,outdate) {
    var reservationRef = firebase.firestore().collection('profiles').doc(profiles_uid)
                                        .collection("profile").doc(profile_uid)
                                        .collection("space").doc(space_uid)
                                        .collection("reservation")

    var reservation = Promise.all([
      reservationRef.add({
        profiles_uid: profiles_uid,
        profile_uid: profile_uid,
        space_uid: space_uid,
        user_uid:user_uid,
        checkin: checkin,
        checkout: checkout,
        timein: timein,
        timeout: timeout,
        extras: extras,
        availabe: availabe,
        hoursbooked:hoursbooked,
        indate:indate,
        outdate:outdate,
        read:false,
        status:"panding",
        date: new Date()
      }).then((res) => {

      })
    ]);
  }
  previews(profiles_uid, profile_uid, space_uid,comment,timecomment,datecomment) {
    var reservationRef = firebase.firestore().collection('profiles').doc(profiles_uid)
                                        .collection("profile").doc(profile_uid)
                                        .collection("space").doc(space_uid)
                                        .collection("previews")

    var reservation = Promise.all([
      reservationRef.add({
        profiles_uid: profiles_uid,
        profile_uid: profile_uid,
        space_uid: space_uid,
        comment:comment,
        read:false,
        timecomment:timecomment,
        datecomment:datecomment,
        status:"panding",
        date: new Date()
      }).then((res) => {

      })
    ]);
  }
  //profilesuid,this.account.getUserSession(),profileuid, this.userprofileuid,spaceuid,namespace,price
  favourite(companyuid,useruid,userprofileuid,compantprofileuid, spaceuid,workspace,price) {
    var favouriteRef = firebase.firestore().collection('profiles').doc(useruid)
                                           .collection("user-profile").doc(userprofileuid)
                                           .collection("favourite")
    var reservation = Promise.all([
      favouriteRef.add({
        companyuid:companyuid,
        useruid: useruid,
        userprofileuid: userprofileuid,
        compantprofileuid:compantprofileuid,
        spaceuid: spaceuid,
        workspace:workspace,
        price:price,
        date: new Date()
      }).then((res) => {

      })
    ]);
  }
  deleteFavourite(useruid,userprofileuid, deletebyuid) {
    var favouriteRef = firebase.firestore().collection('profiles').doc(useruid)
                                           .collection("user-profile").doc(userprofileuid)
                                           .collection("favourite").doc(deletebyuid)
   var reservation = Promise.all([
      favouriteRef.delete().then((res) => {

      })
    ]); 
  }

  continueBooking(spaceuid,profuid,spaceId){
      this.spaceuid=spaceuid;
      this.profuid=profuid;
      this.spaceId=spaceId;
  }
  getSpaceuid(){return this.spaceuid;}
  getProfuid(){return this.profuid}
  getSpaceId(){return this.spaceId}

  getSpaceuidDestroy(){
    this.spaceuid =null
    return this.spaceuid;
  }
  getProfuidDestroy(){
    this.profuid =null
    return this.profuid
  }
  getSpaceIdDestroy(){
    this.spaceId =null 
    return this.spaceId
  }

setAllnull(){
  return this.spaceuid = null,this.profuid=null, this.spaceId=null;
}



}
