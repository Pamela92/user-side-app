import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import { from } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class OwnerServiceService {
  db = firebase.firestore()
  array:Array<any>=[];
  firebase: any;
  auth = firebase.auth();
  arr = [];
  resArr = new Array()
  resProfArray = new Array()
  UID: any;
  workspace_uid: any;
  constructor(private router: Router) { }

  signAuth() {
    return firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const uid = user.uid;
        //  this.setSession(email);
        this.setuid(uid)
        console.log('user logged in: ', user);
      } else {
        console.log('user logged out')
      }
    });
  }
  setuid(a) {
    this.UID = a;
  }
  getUid() {
    return this.UID;
  }
  reserve() {
    return firebase.firestore().collection('CoWorking-Space');
  }
  //   gallery() {
  //   return firebase.firestore().doc('space');
  // }

  updateUserProfile(user_uid, uid, name, surname,address, email, phone,img_profile) {
    var db = firebase.firestore();
    var hotelsRef = db.collection("profiles").doc(uid);
    var hotel = Promise.all([
      hotelsRef.collection("user-profile").doc(user_uid)
        .set({
          name:name, 
          surname:surname,
          address:address,
          email: email,
          phone: phone,
          uid: uid,
          user_uid: user_uid,
          img_profile: img_profile
        }, { merge: true }).then(a => {
          console.log("Changed")
        })
    ]);
  }
  editUserProfile(user_uid, uid, name, surname,address, email, phone,img_profile) {
    var db = firebase.firestore();
    var hotelsRef = db.collection("profiles");
    hotelsRef.doc(uid).collection("user-profile").doc(user_uid)
    .set({
      name:name, 
      surname:surname,
      address:address,
      email: email,
      phone: phone,
      uid: uid,
      user_uid: user_uid,
      img_profile: img_profile
     }, { merge: true })
  }
  changeImg(user_uid, uid, img_profile) {
    var db = firebase.firestore();
    var hotelsRef = db.collection("profiles");
    hotelsRef.doc(uid).collection("user-profile").doc(user_uid)
    .set({
      uid: uid,
      user_uid: user_uid,
      img_profile: img_profile
     }, { merge: true })
  }






  changeImgSpace(user_uid, profile_uid, image,cate_uid) {
    var db = firebase.firestore();
    var hotelsRef = db.collection("profiles");
    hotelsRef.doc(user_uid).collection("profile").doc(profile_uid).collection("space").doc(cate_uid)
    .update({
      image: image
     })
  }


  // console.log( this.addCoSpaceForm.value.categories+" "+
  // this.addCoSpaceForm.value.category_number
  // +" "+this.addCoSpaceForm.value.address
  // +" "+this.addCoSpaceForm.value.city
  // +" "+this.addCoSpaceForm.value.province)



  addcoworkingSpace(profiles_uid,profile_uid,categories,category_number,address,city,province,amenities,image,price,description) {
    var db = firebase.firestore();
    var hotelsRef = db.collection("profiles").doc(profiles_uid);
    var hotel = Promise.all([
      hotelsRef.collection("profile").doc(profile_uid).collection("space")
        .add({
          uid: profiles_uid,
          workspace_uid:profile_uid,
          categories:categories,
          category_number:category_number,
          address:address,
          city:city,
          province:province,
          amenities:amenities,
          image:image,
          price:price,
          description:description
        }).then(a => {
          console.log("Changed")
        })
    ]);
  }

  updateCoworkingSpace(profiles_uid,profile_uid,cate_uid,categories,category_number,address,price,city,province,amenities,description) {
    var db = firebase.firestore();
    var hotelsRef = db.collection("profiles").doc(profiles_uid);
    var hotel = Promise.all([
      hotelsRef.collection("profile").doc(profile_uid).collection("space").doc(cate_uid)
        .update({
          uid: profiles_uid,
          workspace_uid:profile_uid,
          categories:categories,
          category_number:category_number,
          address:address,
          city:city,
          province:province,
          amenities:amenities,
          price:price,
          description:description
        }).then(a => {
          console.log("Changed")
        })
    ]);
  }
  deleteSpace(profiles_uid,profile_uid,cate_uid) {
    var db = firebase.firestore();
    var hotelsRef = db.collection("profiles").doc(profiles_uid);
    var hotel = Promise.all([
      hotelsRef.collection("profile").doc(profile_uid).collection("space").doc(cate_uid)
        .delete().then(a => {
          console.log("Changed")
        })
    ]);
  }





  reservation(uid, name, surname, phone, checkin, checkout, timein, timeout, spaceBooked, usertype) {
    var citiesRef = firebase.firestore().collection('profiles')
    var hotel = Promise.all([
      citiesRef.doc("8j3w4lEbm3OBxgQYVNGQmN1YU292").collection("bookings").add({
        name: name,
        surname: surname,
        phone: phone,
        checkin: checkin,
        checkout: checkout,
        timein: timein,
        timeout: timeout,
        spaceBooked: spaceBooked,
        usertype: usertype,
        date: new Date()
      }).then((res) => {

      })
    ]);
  }
///////////////////////////////////////////////////////////////////
//////////////////////////Get Workspace Uid///////////////////////
setWorkSpaceUID(uid){
  this.workspace_uid =uid;
}
getWorkSpaceUID(){
 return this.workspace_uid ;
}

}
