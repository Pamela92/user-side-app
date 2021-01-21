import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { Router, ActivatedRoute } from '@angular/router';
import 'firebase/firestore';
import 'firebase/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInSignUpService {

  db = firebase.firestore()
  uidOwner: any
  emailOwner: any;
  email: any;
  uid: any;
  // UID:any;
  status: boolean;
  group: any
  uidUser: any;

  constructor(private router: Router, public route: ActivatedRoute) { }
  // async createAccount(email, password) {
  //   firebase.auth().createUserWithEmailAndPassword(email, password).then(results => {
  //     console.log(results);
  //   }).catch((error) => {
  //     console.log(error.message);
  //   })
  // }

  signAuth(){
    return firebase.auth().onAuthStateChanged(user => {
     if(user){
      const uid = user.uid;
      //  this.setSession(email);
      this.setuid(uid)
      console.log('user logged in: ', user);
     }else{
       console.log('user logged out')
     }
    });
  }
  setuid(a){
    this.uid = a;
  }
  getUid(){
    return this.uid;
  }
  Signup(email, password) {

    return firebase.auth().createUserWithEmailAndPassword(email, password)

  }

  async SignIn(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(results => {
      console.log(results);
      var user = firebase.auth().currentUser;
      var email, uid;
      if (user != null) {
        email = user.email;
        uid = user.uid;
        this.userSession(uid);
        this.checkExistance(this.getUserSession())

        console.log("details: " + email + ' ' + this.getUserSession())
      }
      // this.router.navigateByUrl('booking-list');
    }).catch((error) => {
      console.log(error.message);
    })
  }
  userSession(uidOwner) {
    this.uidOwner = uidOwner;
  }
  userEmail(emailOwner) {
    this.emailOwner = emailOwner;
  }

  getUserSession() {
    return this.uidOwner;
  }
  getEmail() {
    return this.emailOwner;
  }
///////Logout///////
logOut() {
  this.uidOwner =null;
  this.emailOwner = null;
   this.uidUser= null;
   this.status = null;
  return this.uidOwner ;
}
////////////////////
  userGroup(uid, usergroup, email) {
    var db = firebase.firestore();
    var userGroupCollecion = db.collection("profiles");
    var query = Promise.all([
      userGroupCollecion.doc(uid).collection('profile').doc().set({
        company_name: "company name",
        // company_emaile: email,
        company_tel: "company telephone",
        company_website: "www.webste.com",
        social_media: "social media links",
        company_address: "address",
        usergroup: usergroup,
        uid: uid,
        date: new Date()
      })
    ]);
  }
  usersGroup(uid, usergroup) {
    var db = firebase.firestore();
    var userGroupCollecion = db.collection("profiles");
    var query = Promise.all([
      userGroupCollecion.doc(uid).collection('user-profile').doc().set({
        name: "your name",
        surname: "your surname",
        email: "youremail@kkm.com",
        phone: "company telephone",
        img_profile:"data:image/jpeg;base64,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", uid:uid,
        usergroup: usergroup,
        date: new Date()
      })
    ]);
  }


  checkExistance(uid) {



    this.db.collectionGroup("user-profile")
      .where("uid", "==", (uid))
      // .where("publishedAt", "<=", new Date("2018-12-31 23:59"))
      .get()
      .then(snap => {
        snap.forEach(doc => {
          if (!doc.exists) {
            console.log("No such user in the profiles Document!");
          } 
          if(doc.exists){
        
            if (doc.data().usergroup == 'user') {
              
              this.status = true;            
             // console.log("Document data:", doc.data());
             console.log("user welcome");
             this.setUserProfileUid(doc.id)
             this.router.navigateByUrl('view-space');
            } 
        
          }
     
        });
        // if (this.status != true){
        //   // console.log(this.status)
        //   console.log("Create profile please")
        //   this.router.navigateByUrl('/user-group');
        // }
      });
      
      
      
  }
  setStatus(x) {
    this.status = x;
  }
  setUserProfileUid(x){
    this.uidUser = x;
  }
  getUserProfileUid(){
    return this.uidUser;
  }
  returnStatus() {
    return this.status
  }
  
}
